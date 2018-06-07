import * as React from 'react';
import * as PropTypes from 'prop-types';

class Props {}

class SubComponent<T = {}> extends React.Component<Props & T, any> {
  static contextTypes = {
    centralizedUpdates: PropTypes.func,
    hasInViews: PropTypes.bool,
    viewId: PropTypes.string,
    viewType: PropTypes.string,
  };

  displayName = 'SubComponent';

  constructor(props: Props & T) {
    super(props);
  }

  componentDidUpdate() {
    this.context.centralizedUpdates(this);
  }

  componentDidMount() {
    this.context.centralizedUpdates(this);
  }

  render() {
    return null;
  }
}

export class Zoom extends SubComponent<any> { displayName = 'Zoom'; }
export class Node extends SubComponent<any> { displayName = 'Node'; }
export class Edge extends SubComponent<any> { displayName = 'Edge'; }
