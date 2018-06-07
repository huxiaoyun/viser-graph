import * as React from 'react';
import './editor.css';
import * as G6Editor from '@ali/g6-editor/lib/index';
console.log(G6Editor.Command);
export default class ItemPannel extends React.Component {
  state = {
    selectedModel: null,
  };

  page = null;
  editor = null;

  componentDidMount() {
    const { children, height, align, grid, shortcut, noEndEdge } = this.props;
    const editor = new G6Editor();

    const page = new G6Editor.Flow({
      graph: {
        container: 'editor',
        height,
      },
      align,
      noEndEdge,
    });
    page.on('afteritemselected', ev => {
      this.setState({
        selectedModel: ev.item.getModel(),
      });
    });
    page.on('afterzoom', ev => {
      this.setState({
        curZoom: ev.updateMatrix[0],
      });
    });
    editor.add(page);

    children.forEach((element) => {
      if (element.type.name === 'ToolBar') {
        const toolbar = new G6Editor.Toolbar({
          container: 'toolbar',
        });
        editor.add(toolbar);

      } else if (element.type.name === 'Navigator') {
        const minimap = new G6Editor.Minimap({
          container: 'minimap',
          height: 120,
          width: 200,
        });
        editor.add(minimap);

      } else if (element.type.name === 'DetailPannel') {
        const detailpannel = new G6Editor.Detailpannel({
          container: 'detailpannel',
        });
        editor.add(detailpannel);

      } else if (element.type.name === 'ItemPannel') {
        const itempannel = new G6Editor.Itempannel({
          container: 'itempannel',
        });
        editor.add(itempannel);

      } else if (element.type.name === 'ContextMenu') {
        const contextmenu = new G6Editor.Contextmenu({
          container: 'contextmenu',
        });
        editor.add(contextmenu);
      }

    });

    this.page = page;
    this.editor = editor;
  }

  render() {
    return (<div id="editor">
      {this.props.children}
    </div>);
  }
}

export const registerNode = G6Editor.Flow.registerNode;
export const command = G6Editor.Command;
