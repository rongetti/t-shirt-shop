import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';

const availableColorsStyles = {
  display: 'inline-block',
  position: 'relative',
  width: 20,
  height: 20
};

class Color extends Component {

  constructor() {
    super();
    this.state = {
      showTooltip: false
    };
  }

  handleMouseEnter = () => {
    this.setState(({showTooltip}) => (
        {
          showTooltip: true
        }
    ));
  };

  handleMouseLeave = () => {
    this.setState(({showTooltip}) => (
        {
          showTooltip: false
        }
    ));
  };

  render() {
    return (
        <span style={{...availableColorsStyles, backgroundColor: this.props.color}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          {this.state.showTooltip ? <Tooltip label={this.props.color} position={'bottom'} top={20} left={-10} /> : null}
        </span>
    )
  }

}

Color.propTypes = {
  color: PropTypes.string.isRequired
};

export default Color
