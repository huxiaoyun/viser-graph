import { CommonModule } from '@angular/common';
import { enableProdMode, NgModule } from '@angular/core';
import {registerNode, registerEdge, registerGuide, Layouts, Util} from '../../viser-graph/src';
import { Graph, Zoom, Node, Edge } from './components/index';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Graph,
    Zoom,
    Node,
    Edge,
  ],
  exports: [
    Graph,
    Zoom,
    Node,
    Edge,
  ],
})

export class ViserGraphModule {
}

enableProdMode();

export {
  registerNode, registerEdge, registerGuide, Layouts, Util
}
