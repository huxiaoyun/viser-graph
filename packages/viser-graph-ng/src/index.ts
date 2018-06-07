import { CommonModule } from '@angular/common';
import { enableProdMode, NgModule } from '@angular/core';
import {viserGraph} from '../../viser-graph/src';
import { Graph, Zoom } from './components/index';

@NgModule({
  imports: [CommonModule],
  declarations: [
    Graph,
    Zoom,
  ],
  exports: [
    Graph,
    Zoom,
  ],
})

export class ViserGraphModule {
}

enableProdMode();
export const registerAnimation = viserGraph.registerAnimation;
export const registerShape = viserGraph.registerShape;
export const Global = viserGraph.Global;
