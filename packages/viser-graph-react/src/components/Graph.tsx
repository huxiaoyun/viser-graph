import * as React from 'react';
import * as PropTypes from 'prop-types';
import {viserGraph} from '../../../viser-graph/src';

function firstLowerCase(str: string) {
  return str.replace(/^\S/, (s: any) => {
    return s.toLowerCase();
  });
}

function retain(obj: any, attr: any) {
  const newObj = Object.create(null);

  for (const item in obj) {
    if (obj.hasOwnProperty(item)) {
      const arrAttr = Array.isArray(attr) ? attr : [attr];

      if (arrAttr.indexOf(item) >= 0) {
        newObj[item] = obj[item];
      }
    }
  }

  return newObj;
}


function isOwnEmpty(obj: object) {
  for (const name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false;
    }
  }
  return true;
}

export default class Graph extends React.Component<any, any> {
  static childContextTypes = {
    centralizedUpdates: PropTypes.func,
  };

  chart: any;
  container: any;
  config: any = {};

  constructor(props: any) {
    super(props);
    this.config.data = props.data;
  }

  getChildContext() {
    return {
      centralizedUpdates: this.centralizedUpdates,
    };
  }

  combineChartConfig(props: any) {
    const chartRetain = [
      'height', 'width', 'animate',
      'fitView', 'fitViewPadding', 'type', 'layout'
    ];
    this.config.graph = retain(props, chartRetain);

    const eventRetain = [
      'onMouseDown', 'onMouseMove', 'onMouseUp',
      'onClick', 'onDbClick',
      'onTouchStart', 'onTouchMove', 'onTouchEnd',
      'onPlotEnter', 'onPlotMove', 'onPlotLeave',
      'onPlotClick', 'onPlotDbClick',
      'onAfterchange',
    ];

    this.config.events = retain(props, eventRetain);
  }

  combineContentConfig(displayName: string, props: any, config: any) {
    const realName = firstLowerCase(displayName);
    const nameLowerCase = displayName.toLowerCase();

    const regSeries = [
      'zoom',
      'node',
      'edge',
    ];
    if (regSeries.indexOf(realName) < 0 && isOwnEmpty(props)) {
      config[nameLowerCase] = true;
    } else {
      config[nameLowerCase] = props;
    }

    return config;
  }

  centralizedUpdates = (unit: any) => {
    const config = this.config;
    const props = unit.props;
    const displayName = unit.displayName;
    this.combineContentConfig(displayName, props, config);
  };


  createChartInstance() {
    if (this.chart) {
      this.chart.destroy();
    }

    this.combineChartConfig(this.props);

    this.config.graph.container = this.container;
    this.chart = new viserGraph(this.config).render();
  }

  repaintChartInstance() {
    this.combineChartConfig(this.props);

    if (this.chart) {
      this.chart.repaint(this.config);
    } else {
      this.config.graph.container = this.container;
      this.chart = new viserGraph(this.config).render();
    }
  }

  clearConfigData() {
    this.config = {};
  }

  componentDidMount() {
    this.createChartInstance();
    this.clearConfigData();
  }

  componentDidUpdate(props: any) {
    this.repaintChartInstance();
    this.clearConfigData();
  }

  componentWillReceiveProps() {

  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
    this.container = null;
  }

  portalRef = (container: any) => {
    if (!this.container) {
      this.container = container;
    }
  };

  render() {
    return <div ref={this.portalRef}>{this.props.children}</div>;
  }
}
