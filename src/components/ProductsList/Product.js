import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import util from '../../util';
import Color from './Color';

const productStyles = {
  float: 'left',
  paddingTop: 15,
  paddingBottom: 15
};

const productCardStyles = {
  border: 'none',
  color: 'initial'
};

const productImageStyles = {
  height: 250,
  width: 'auto',
  objectFit: 'contain'
};

class Product extends Component {

  render() {
    const {product} = this.props;
    const colors = product['available_colors'].map(color => <Color color={color} key={color} />);
    return (
      <a href={`/product/${product['id']}`} className="t-product-link">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 t-product" style={productStyles}>
          <div className="card" style={productCardStyles}>
            <img className="card-img-top" src={`../../assets/images/products/${product.image}`} style={productImageStyles} alt="Product"/>
            <div className="card-body">
              <h5 className="card-title text-truncate">{product.name}</h5>
              <p className="card-text">{util.formatPrice(product.price, this.props.currency)}</p>
              <div>{colors}</div>
            </div>
          </div>
        </div>
      </a>
    )
  }

}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  currency: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currency: state.currency.item,
});

export default connect(mapStateToProps, {})(Product);
