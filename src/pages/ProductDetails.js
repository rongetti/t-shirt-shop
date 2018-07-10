import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatBag from '../components/FloatBag/FloatBag';
import Breadcrumb from '../components/Breadcrumb';
import Image from '../components/ProductDetails/Image';
import Form from '../components/ProductDetails/Form';

class ProductDetails extends Component {

  render() {
    const {product} = this.props;
    const breadcrumbs = {
      links: [
        {label: 'Home', url: '/'},
        {label: 'T-Shirts', url: '/'}
      ],
      active: product['name']
    };
    return (
        <React.Fragment>
          <Header/>
          <div className="content clearfix">
            <Breadcrumb breadcrumbs={breadcrumbs}/>
            <div className="container col-sm-6 mb-5 float-left clearfix">
              <Image image={product['image']} />
              <div className="text-center"><small><em>Hover to zoom image</em></small></div>
            </div>
            <div className="container col-sm-6 mb-5 float-left clearfix">
              <Form product={product}/>
            </div>
          </div>
          <Footer/>
          <FloatBag/>
        </React.Fragment>
    )
  }

}

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.details.product
});

export default connect(mapStateToProps)(ProductDetails);
