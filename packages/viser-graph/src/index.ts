import * as G6 from '@ali/g6';

export class viserGraph {
  config: any;
  graph: any;
  constructor (config: any) {
    console.log('viserGraph', config);
    this.config = config;
  }

  render() {
    this.setGraph();
    this.setData();
    this.setEvent();
  };

  setGraph() {
    if (!this.config.graph.container) {
      console.error('请设置容器');
      return;
    }
    let graphConfig = {};
    if (this.config.graph) {
      graphConfig = {
        ...graphConfig,
        ...this.config.graph
      };
    }

    if (this.config.zoom) {
      graphConfig = {
        ...graphConfig,
        ...this.config.zoom
      };
    }

    switch(this.config.graph.type) {
      case 'tree':
        this.graph = new G6.Tree(graphConfig);
        break;
      case 'graph':
        this.graph = new G6.Graph(graphConfig);
        break;
      default:
        this.graph = new G6.Graph(graphConfig);
    }

  }

  setData() {
    if (!this.config.data) {
      console.error('请设置数据');
      return ;
    }
    this.graph.read(this.config.data);
  }

  setEvent() {
    Object.keys(this.config.events || []).forEach((k) => {
      const eventName = k.replace('on', '').toLocaleLowerCase();
      this.graph.on(eventName, (ev: any)=>{
        this.config.events[k](ev, this.graph);
      });
    });
  }
}

export const registerNode = G6.registerNode;
export const registerEdge = G6.registerEdge;
export const registerGuide = G6.registerGuide;

