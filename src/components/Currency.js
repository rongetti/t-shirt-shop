import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateCurency } from '../store/actions/currencyActions';
import Selectbox from './Selectbox';

const currencies = [
  { value: '$', label: '$' },
  { value: '€', label: '€' },
  { value: '£', label: '£' },
];

class Currency extends Component {

  handleCurrencyChange = value => {
    this.props.updateCurency(value);
  };

  render() {
    return (
        <Selectbox options={currencies} classes={'t-currency-select'} handleOnChange={this.handleCurrencyChange} />
    );
  }

}

Currency.propTypes = {
  currency: PropTypes.string.isRequired,
  updateCurency: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currency: state.currency.item,
});

export default connect(mapStateToProps, {updateCurency})(Currency);
