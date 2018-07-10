import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import Collapsible from 'react-collapsible';

import { updateFilters } from '../../store/actions/filterActions';
import Checkbox from '../Checkbox';
import PriceSlider from './PriceSlider';
import { allSizes } from '../../const';

const availableColors = [
  'Aquamarine', 'Azure', 'Black', 'Chocolate', 'Crimson', 'DarkOrange', 'DarkRed', 'DimGrey', 'ForestGreen', 'Gold', 'GreenYellow', 'Indigo', 'Khaki', 'LightBlue', 'LimeGreen', 'Navy', 'Olive', 'Plum', 'Purple', 'RoyalBlue', 'Salmon', 'SeaGreen', 'SlateGrey', 'Teal', 'YellowGreen', 'Red'
];

const filtersHeaderStyles = {
  paddingRight: 10
};

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.selectedSizes = new Set();
    this.selectedColors = new Set();
    this.selectedPriceRange = this.props.filters['priceRange']
  }

  toggleSizeCheckbox = label => {
    if (this.selectedSizes.has(label)) {
      this.selectedSizes.delete(label);
    } else {
      this.selectedSizes.add(label);
    }
    this.updateFilters();
  };

  toggleColorCheckbox = label => {
    if (this.selectedColors.has(label)) {
      this.selectedColors.delete(label);
    } else {
      this.selectedColors.add(label);
    }
    this.updateFilters();
  };

  handlePriceRangeChange = priceRange => {
    this.selectedPriceRange = Object.assign({}, priceRange);
    this.updateFilters();
  };

  updateFilters = () => {
    const filters = {
      sizes: Array.from(this.selectedSizes),
      colors: Array.from(this.selectedColors),
      priceRange: this.selectedPriceRange
    };
    this.props.updateFilters(filters);
  };

  createSizesCheckboxes = () =>
      allSizes.map(filter => (
          <Checkbox classes="t-filters t-filters-available-size"
                    value={filter}
                    label={filter}
                    handleCheckboxChange={this.toggleSizeCheckbox} key={filter}
          />
      ));

  createColorsCheckboxes = () =>
      availableColors.map(filter => (
          <Checkbox classes="t-filters t-filters-available-colors t-blurred"
                    styles={{backgroundColor: filter}}
                    value={filter}
                    label={''}
                    tooltip={filter}
                    handleCheckboxChange={this.toggleColorCheckbox} key={filter}
          />
      ));

  render() {

    let filterDesc = '';

    if (this.props.filters['sizes'].length > 0 || this.props.filters['colors'].length > 0) {
      this.props.filters['sizes'].forEach(filter => filterDesc = filterDesc.concat(filter + ' '));
      this.props.filters['colors'].forEach(filter => filterDesc = filterDesc.concat(filter + ' '));
      filterDesc = ' (' + filterDesc.trim() + ')';
    }

    const filtersTitle = <p style={filtersHeaderStyles}><span className="h4">Filters</span>{filterDesc}</p>;
    const filtersContent = <React.Fragment>
      <div>
        <p>By size:</p>
        {this.createSizesCheckboxes()}
      </div>
      <div>
        <p>By color:</p>
        {this.createColorsCheckboxes()}
      </div>
      <div className="mb-5">
        <p>By price:</p>
        <PriceSlider min={this.props.filters['priceRange'].min} max={this.props.filters['priceRange'].max} handlePriceRangeChange={this.handlePriceRangeChange} />
      </div>
    </React.Fragment>;

    return (
        <React.Fragment>
          <MediaQuery maxWidth={575}>
            <Collapsible trigger={filtersTitle}>
              {filtersContent}
            </Collapsible>
          </MediaQuery>
          <MediaQuery minWidth={576}>
            {filtersTitle}
            {filtersContent}
          </MediaQuery>
        </React.Fragment>
    );

  }

}

Sidebar.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  filters: PropTypes.object
};

const mapStateToProps = state => ({
  filters: state.filters.items
});

export default connect(mapStateToProps, {updateFilters})(Sidebar);
