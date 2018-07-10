import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tooltip from './Tooltip';

class Checkbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      showTooltip: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('isChecked'))
      this.setState(({isChecked}) => (
        {
          isChecked: nextProps.isChecked
        }
      ))
  }

  toggleCheckboxChange = () => {
    const {handleCheckboxChange, value} = this.props;
    this.setState(({isChecked}) => (
        {
          isChecked: !isChecked,
        }
    ), handleCheckboxChange(value));
  };

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
    const {value, label, tooltip, classes, styles} = this.props;
    const {isChecked} = this.state;
    let t;
    if (tooltip) t = <Tooltip label={tooltip} position={'bottom'} top={35} left={0} />;

    return (
        <div className={classes}>
          <label>
            <input type="checkbox" value={value} checked={isChecked} onChange={!!this.props.handleCheckboxChange ? this.toggleCheckboxChange : null} />
            <span className="t-checkmark" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={styles}>{label}</span>
          </label>
          {this.state.showTooltip ? t : null}
        </div>
    );
  }

}

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  styles: PropTypes.object,
  handleCheckboxChange: PropTypes.func,
  isChecked: PropTypes.bool
};

export default Checkbox;
