import React, { Component } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatBag from '../components/FloatBag/FloatBag';
import Breadcrumb from '../components/Breadcrumb';
import Sidebar from '../components/ProductsList/Sidebar';
import Shelf from '../components/ProductsList/Shelf';

const breadcrumbs = {
  links: [
    {label: 'Home', url: '/'}
  ],
  active: 'T-Shirts'
};

class ProductsList extends Component {

  render() {
    return (
        <React.Fragment>
          <Header/>
          <div className="content clearfix">
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className="container col-sm-3 float-left clearfix">
              <Sidebar/>
            </div>
            <div className="container col-sm-9 float-left clearfix">
              <Shelf/>
            </div>
          </div>
          <Footer/>
          <FloatBag/>
        </React.Fragment>
    )
  }

}

export default ProductsList;
