import { default as Graph } from './components/Graph';
import { Zoom } from './components/SubComponent';

import Editor from './editor/editor';
import Navigator from './editor/navigator';
import DetailPannel from './editor/detailpannel';
import ItemPannel from './editor/itempannel';
import Toolbar from './editor/toolbar';

import { registerNode, command } from './editor/editor';

import 'antd/dist/antd.css';

export {
  Graph,
  Zoom,
  Editor,
  Navigator,
  DetailPannel,
  ItemPannel,
  Toolbar,

  registerNode,
  command,
};
