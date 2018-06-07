import * as React from 'react';
import './toolbar.css';

const commandIconMap = {
  undo: 'icon-undo',
  redo: 'icon-redo',
  copy: 'icon-copy-o',
  paste: 'icon-paster-o',
  delete: 'icon-delete-o',
  zoomIn: 'icon-zoom-in-o',
  zoomOut: 'icon-zoom-out-o',
  autoZoom: 'icon-fit',
  resetZoom: 'icon-actual-size-o',
  toBack: 'icon-to-back',
  toFront: 'icon-to-front',
  multiSelect: 'icon-select',
  addGroup: 'icon-group',
  unGroup: 'icon-ungroup',
};

export default class ToolBar extends React.Component {

  render() {
    const { tools } = this.props;
    return (<div id="toolbar">
      {
        tools.map((tool:any, i: number) => {
          if (tool.command === 'separator') {
            return (<i key={`tool-${i}`} className={`separator ${tool.classes}`}></i>);
          } else if (commandIconMap[tool.command]) {
            let className = `command iconfont ${commandIconMap[tool.command]}`;
            if (tool.classes) {
              className += tool.classes;
            }
            return (<i key={`tool-${i}`} data-command={tool.command} className={className} title={tool.label}></i>)
          } else {
            return (<i key={`tool-${i}`} data-command={tool.command} className='command' title={tool.label}>{tool.label}</i>)
          }
        })
      }
    </div>);
  }
}

