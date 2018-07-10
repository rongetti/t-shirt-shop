import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleFloat } from '../../store/actions/floatBagActions';
import { selectSize, selectColor, selectQty } from '../../store/actions/detailsActions';
import { updateBag, updateItem } from '../../store/actions/shoppingBagActions';
import util from '../../util';
import { allSizes } from '../../const';
import Checkbox from '../Checkbox';
import Selectbox from '../Selectbox';

const qty = [];

for (let i = 1; i <= 10; i++) {
  qty.push({value: i, label: i});
}

class Form extends Component {

  createSizesCheckboxes = (availableSizes) =>
      allSizes.map(size =>
          availableSizes.indexOf(size) > -1
              ? <Checkbox classes="t-filters t-filters-available-size"
                          value={size}
                          label={size}
                          handleCheckboxChange={this.toggleSizeCheckbox}
                          isChecked={this.props.selectedSize === size}
                          key={size}/>
              : <Checkbox classes="t-filters t-filters-available-size disabled"
                          value={size}
                          label={size}
                          key={size}/>
      );

  createColorsCheckboxes = (availableColors) =>
      availableColors.map(filter =>
          <Checkbox classes="t-filters t-filters-available-colors"
                    styles={{backgroundColor: filter}}
                    value={filter}
                    label={''}
                    tooltip={filter}
                    handleCheckboxChange={this.toggleColorCheckbox}
                    isChecked={this.props.selectedColor === filter}
                    key={filter}/>
      );

  toggleSizeCheckbox = size => {
    this.props.selectSize(undefined);
    this.props.selectSize(size);
  };

  toggleColorCheckbox = color => {
    this.props.selectColor(undefined);
    this.props.selectColor(color);
  };

  handleQtyChnage = qty => {
    this.props.selectQty(parseInt(qty, 10));
  };

  openFloatBag = () => {
    this.props.toggleFloat(true);
  };

  handleOnSubmit = () => {
    this.openFloatBag();
    const bagItems = this.props.bagItems;
    const order = {
      id: this.props.product.id,
      name: this.props.product.name,
      price: this.props.product.price,
      image: this.props.product.image,
      size: this.props.selectedSize,
      color: this.props.selectedColor,
      qty: this.props.selectedQty
    };
    const updateAtIndex = bagItems.findIndex(item => (item.id === order.id && item.size === order.size && item.color === order.color));
    if (updateAtIndex === -1) {
      bagItems.push(order);
      this.props.updateBag(bagItems);
    } else {
      const qty = bagItems[updateAtIndex].qty + order.qty;
      this.props.updateItem({atIndex: updateAtIndex, qty: qty})
    }

  };

  render() {
    const {product, selectedSize, selectedColor, selectedQty} = this.props;
    const isDisabled = !selectedSize || !selectedColor || selectedQty === 0;
    return (
        <React.Fragment>
          <h3>{product.name}</h3>
          <p className="text-danger"><strong>{util.formatPrice(product.price, this.props.currency)}</strong></p>
          <div>
            <p>Size {selectedSize}</p>
            {this.createSizesCheckboxes(product.available_sizes)}
          </div>
          <div>
            <p>Color {selectedColor}</p>
            {this.createColorsCheckboxes(product.available_colors)}
          </div>
          <div>
            <p>Qty {selectedQty}</p>
            <p>
              <Selectbox options={qty} classes={'form-control t-product-qty'} handleOnChange={this.handleQtyChnage} />
            </p>
          </div>
          <p>
            <button type="button" onClick={this.handleOnSubmit} className="btn btn-warning btn-block" disabled={isDisabled}>Add to Bag</button>
          </p>
        </React.Fragment>
    )
  }

}

Form.propTypes = {
  toggleFloat: PropTypes.func.isRequired,
  selectSize: PropTypes.func.isRequired,
  selectColor: PropTypes.func.isRequired,
  selectQty: PropTypes.func.isRequired,
  updateBag: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  selectedSize: PropTypes.string,
  selectedColor: PropTypes.string,
  selectedQty: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  bagItems: PropTypes.array
};

const mapStateToProps = state => ({
  selectedSize: state.details.selectedSize,
  selectedColor: state.details.selectedColor,
  selectedQty: state.details.selectedQty,
  currency: state.currency.item,
  bagItems: state.shoppingBag.items,
});

export default connect(mapStateToProps, {toggleFloat, selectSize, selectColor, selectQty, updateBag, updateItem})(Form);
