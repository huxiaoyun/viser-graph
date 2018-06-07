import { viserGraph, registerNode, registerEdge, registerGuide, Layouts } from '../../viser-graph/src';
import Vue, { ComponentOptions } from 'vue';
import typedProps from './typed';
import {oneObjectMoreArray, cleanUndefined, isAllUndefined, normalizeProps} from './utils';

const rootCharts = ['v-graph'];

const rootChartProps = ['data', 'width', 'height', 'container', 'fitView', 'fitViewPadding', 'animate', 'type', 'layout'];

const baseChartComponent = {
  data() {
    return {
      isViser: true,
      jsonForD2: {},
    };
  },
  props: typedProps as any,
  methods: {
    checkIsContainer(componentInstance: Vue) {
      if (
        (componentInstance as any).isViser
        &&
        rootCharts
          .indexOf(((componentInstance as any).$options as any)._componentTag) > -1
      ) {
        return true;
      } else {
        return false;
      }
    },
    findNearestRootComponent(componentInstance: Vue) {
      if (this.checkIsContainer(componentInstance)) {
        return componentInstance;
      }
      if (componentInstance.$parent) {
        return this.findNearestRootComponent(componentInstance.$parent);
      }
      return null;
    },
    createRootD2Json() {
      const d2Json = {
        graph: {
          container: this.$el,
          ...cleanUndefined(normalizeProps(this._props, rootChartProps)),
        },
        data: this._props.data,
        ...this.jsonForD2,
      };

      return d2Json;
    },
    freshChart(isUpdate: boolean) {
      if (rootCharts.indexOf(this.$options._componentTag) > -1) { // hit top
        const d2Json = this.createRootD2Json();
        if (!isUpdate || !this.chart) {
          this.chart = new viserGraph(d2Json).render();
        } else {
          this.chart.repaint(d2Json);
        }
      }
      /**
       * refresh others like axis, coord, guide, etc.
       */
      else {
        const nearestRootComponent = this.findNearestRootComponent(this.$parent);

        if (!nearestRootComponent) {
          throw Error(`${this.$options._componentTag} must be wrapped into v-chart`);
        }

        const rechartName = this.$options._componentTag.replace(/-/g, '').slice(1);
        if (isAllUndefined(this._props)) {
          nearestRootComponent.jsonForD2[rechartName] = true;
        } else {
          oneObjectMoreArray(nearestRootComponent.jsonForD2, rechartName, {
            ...cleanUndefined(normalizeProps(this._props)),
            componentId: this._uid,
          });
        }
      }
    }
  },
  created() { // bubble from parent to child
  },
  mounted() { // bubble from child to parent
    (this as any).freshChart(false);
  },
  updated() { // bubble from child to parent
    (this as any).freshChart(true);
  },
  render(createElement: any) {
    const isContainer = (this as any).checkIsContainer(this);
    if (isContainer) {
      return createElement('div', null, (this as any).$slots.default);
    }
    const props = cleanUndefined(normalizeProps((this as any)._props));
    return createElement('div', { style: { display: 'none' } }, Object.keys(props).map((key) => {
      return '' + key + ':' + JSON.stringify(props[key]);
    }));
  },
} as ComponentOptions<any>;

export default {
  // tslint:disable-next-line:no-shadowed-variable
  install: (Vue: any, options: any) => {
    Vue.component('v-graph', baseChartComponent);
    Vue.component('v-zoom', baseChartComponent);
    Vue.component('v-node', baseChartComponent);
    Vue.component('v-edge', baseChartComponent);
  },
};

export {
  registerNode,
  registerEdge,
  registerGuide,
  Layouts
};


declare module 'vue/types/vue' {
  interface Vue {
    chart: any;
    _props?: object;
    _uid?: string;
    jsonForD2: any;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    _componentTag?: any;
  }
}
