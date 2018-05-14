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
    return null as React.ReactElement<any>;
  }
}

export class Zoom extends SubComponent<any> { displayName = 'Zoom'; }
