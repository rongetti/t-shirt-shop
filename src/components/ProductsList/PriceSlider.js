import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
// import 'react-input-range/lib/css/index.css';

class PriceSlider extends Component {

  min = 0;
  max = 200;

  constructor(props) {
    super(props);
    this.state = {
      value: { min: this.props.min, max: this.props.max },
    };
  }

  render() {
    return (
        <div className="t-price-slider">
          <InputRange
              maxValue={this.max}
              minValue={this.min}
              formatLabel={value => `$${value}`}
              value={this.state.value}
              onChange={value => {
                if ((value.min < this.min) ||
                    (value.max > this.max))
                  return;
                this.setState({value})
              }}
              onChangeComplete={value => {
                this.props.handlePriceRangeChange(value)
              }}/>
        </div>
    )
  }

}

PriceSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  handlePriceRangeChange: PropTypes.func.isRequired
};

export default PriceSlider;
