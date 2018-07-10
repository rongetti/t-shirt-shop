import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchProducts } from '../../store/actions/productActions';
import ShelfHeader from './ShelfHeader';
import Product from './Product';
import ShelfLoader from './ShelfLoader';

class Shelf extends Component {

  componentWillReceiveProps(nextProps) {
    const {filters, sort} = nextProps;

    if (filters !== this.props.filters){
      this.handleFilter(filters);
    }
    if (sort !== this.props.sort) {
      this.handleSort(sort);
    }
  };

  handleFilter = (filters) => {
    this.props.fetchProducts(filters);
  };

  handleSort = (sort) => {
    this.props.fetchProducts(this.props.filters, sort);
  };

  render() {
    const {products} = this.props;
    const p = products.map(product => {
      return (
          <Product product={product} key={product.id}/>
      );
    });
    return (
      <React.Fragment>
        <ShelfHeader productsLength={products.length}/>
        {p}
        {this.props.isFetching ? <ShelfLoader /> : null}
      </React.Fragment>
    )
  }

}

Shelf.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  filters: PropTypes.object,
  sort: PropTypes.string,
};

const mapStateToProps = state => ({
  products: state.products.items,
  isFetching: state.products.isFetching,
  filters: state.filters.items,
  sort: state.sort.item,
});

export default connect(mapStateToProps, {fetchProducts})(Shelf);
