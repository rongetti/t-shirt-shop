import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleFloat } from '../../store/actions/floatBagActions';
import { updateBag } from '../../store/actions/shoppingBagActions';
import util from '../../util';
import Item from './Item';

class FloatBag extends Component {

  toggleFloat = () => {
    this.props.toggleFloat(!this.props.isOpen);
  };

  handleRemove = (i) => {
    const items = this.props.items;
    items.splice(i, 1);
    this.props.updateBag(items);
  };

  handleSubmit = () => {
    alert('Checked out.');
  };

  render() {
    const isOpen = this.props.isOpen;

    const items = this.props.items.length > 0
      ? this.props.items.map((item, index) => (
            <React.Fragment key={index}>
              <Item product={item} onRemove={this.handleRemove} index={index}/>
              <hr className="border-warning"/>
            </React.Fragment>
        ))
      : <span className="t-float-bag-empty mb-5">Add some products to the bag :)</span>;

    let subtotal = 0;
    let itemsInBag = 0;
    this.props.items.forEach(item => {
      subtotal += item.price * item.qty;
      itemsInBag += item.qty;
    });

    return(
        <div className={`t-float-container` + (isOpen ? ' open' : '')}>
          <div className="t-float-toggle" onClick={this.toggleFloat}><span className="t-float-count badge badge-pill badge-danger">{itemsInBag}</span></div>
          <div className="t-float-bag col-12">
            <p className="text-center mt-5"><img src="../../../assets/images/shopping-bag.png" width="30px" alt="Shopping bag" /></p>
            <h4 className="text-warning text-center mb-5">SHOPPING BAG</h4>
            {items}
            <span className="t-float-bag-subtotal mt-3">
              <h5 className="split-para">SUBTOTAL<span>{util.formatPrice(subtotal, this.props.currency)}</span></h5>
            </span>
            <button type="button" onClick={this.handleSubmit} className={`btn btn-warning btn-block mt-5 mb-5 ${items.length === 0 ? 'disabled' : ''}`}>Proceed to Checkout</button>
          </div>
        </div>
    )
  }

}

FloatBag.propTypes = {
  toggleFloat: PropTypes.func.isRequired,
  updateBag: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  currency: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  isOpen: state.floatBag.isOpen,
  items: state.shoppingBag.items,
  currency: state.currency.item
});

export default connect(mapStateToProps, {updateBag, toggleFloat})(FloatBag);
