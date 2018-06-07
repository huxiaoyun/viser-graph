import * as React from 'react';
import './itempannel.css';

export default class ItemPannel extends React.Component {

  render() {
    const { items } = this.props;
    return (<div id="itempannel">
      {
        items.map((item:any, i: number) => {
          if (item.shape === 'img') {
            return <img draggable="false" className="getItem"
              src={item.imgUrl}
              data-type={item.type}
              data-shape={item.shape}
              data-size={item.size}
              data-color={item.color}
              data-label={item.label}
            />;
          } else {
            return <div className="item getItem" data-shape={item.shape} data-type={item.type} data-size={item.size}>
                <span className="pannel-type-icon"></span>{item.label}
              </div>
          }
        })
      }
    </div>);
  }
}
