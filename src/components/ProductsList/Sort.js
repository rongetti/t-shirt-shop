import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateSort } from '../../store/actions/sortActions';
import Selectbox from '../Selectbox';

const sortBy = [
  { value: '',           label: 'Sort by:'  },
  { value: 'lowestprice', label: 'Lowest Price' },
  { value: 'highestprice', label: 'Highest Price' },
];

class Sort extends Component {

  handleSort = value => {
    this.props.updateSort(value);
  };

  render() {
    return (
      <Selectbox options={sortBy} classes={'form-control col-6 col-sm-3 float-right'} handleOnChange={this.handleSort} />
    );
  }

}

Sort.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  sort: state.sort.item,
});

export default connect(mapStateToProps, {updateSort})(Sort);
