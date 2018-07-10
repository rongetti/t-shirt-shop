import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Sort from './Sort';

const shelfHeaderStyles = {
  marginBottom: 10
};

class ShelfHeader extends Component {
  render() {
    return (
      <div className="align-middle clearfix" style={shelfHeaderStyles}>
        {this.props.productsLength} Shirts
        <Sort />
      </div>
    )
  }
}

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired
};

export default ShelfHeader;
