import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import util from '../../util';

class Item extends Component {

  handleRemove = () => {
    this.props.onRemove(this.props.index);
  };

  render() {
    const {image, name, size, color, qty, price} = this.props.product;
    return (
        <div className="t-float-item">
          <div className="t-float-thumbnail" style={{backgroundImage: `url(../../../assets/images/products/${image})`}}> </div>
          <div className="t-float-description">
            <span>{name}</span><br/>
            <span>Size: {size}, Color: {color}</span><br/>
            <span>Qty: {qty}</span>
          </div>
          <span className="t-float-remove" onClick={this.handleRemove}>X</span>
          <span className="t-float-price">{util.formatPrice(price, this.props.currency)}</span>
        </div>
    )
  }

}

Item.propTypes = {
  product: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  currency: state.currency.item,
});

export default connect(mapStateToProps, {})(Item);
