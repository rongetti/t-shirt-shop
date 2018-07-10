import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tooltip extends Component {

  render() {
    const {label, position} = this.props;
    const styles = {top: this.props.top, left: this.props.left};
    const classes = `t-tooltip t-tooltip-${position}`;
    return (
        <div className={classes} style={styles}>
          <div className="t-tooltip-arrow"> </div>
          <div className="t-tooltip-label">{label}</div>
        </div>
    );
  }

}

Tooltip.propTypes = {
  label: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  top: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number
};

export default Tooltip;
