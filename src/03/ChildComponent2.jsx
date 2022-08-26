import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends Component {
  render() {
    const { obj, requiredString } = this.props;
    return (
      <>
        <div>{String(Object.entries(obj))}</div>
        <div>{requiredString}</div>
      </>
    );
  }
}

ChildComponent2.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  requiredString: PropTypes.string.isRequired,
};

export default ChildComponent2;
