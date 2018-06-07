import * as React from 'react';
import './detailpannel.css';

export default class DetailPannel extends React.Component {

  render() {
    const { nodeDetailPannel, edgeDetailPannel, groupDetailPannel, canvasDetailPannel, multiSelectDetailPannel } = this.props;
    return (<div id="detailpannel">
    {
      nodeDetailPannel ? (
        <div data-status="node-selected" className="pannel" id="node_detailpannel">
        <div className="pannel-title">节点</div>
          <div className="block-container">
            {nodeDetailPannel}
          </div>
        </div>
      ): null
    }
    {
      edgeDetailPannel ? (
        <div data-status="edge-selected" className="pannel" id="edge_detailpannel">
        <div className="pannel-title">边</div>
          <div className="block-container">
            {edgeDetailPannel}
          </div>
        </div>
      ): null
    }
    {
      groupDetailPannel ? (
        <div data-status="group-selected" className="pannel" id="group_detailpannel">
          <div className="pannel-title">组</div>
          <div className="block-container">
            {groupDetailPannel}
          </div>
        </div>
      ): null
    }
    {
      canvasDetailPannel ? (
        <div data-status="canvas-selected" className="pannel" id="canvas_detailpannel">
          <div className="pannel-title">画布</div>
          <div className="block-container">
            {canvasDetailPannel}
          </div>
        </div>
      ):null
    }
    {
      multiSelectDetailPannel ? (
        <div data-status="multi-selected" className="pannel" id="multi_detailpannel">
          <div className="pannel-title">多选</div>
          <div className="block-container">
            {multiSelectDetailPannel}
          </div>
        </div>
      ):null
    }
  </div>);
  }
}
