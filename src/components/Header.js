import React, { Component } from 'react';
import { connect } from 'react-redux';

import Currency from './Currency';

class Header extends Component {

  gg = () => {
      // console.log(this.props.gg);
  };

  render() {
    return (
      <div className="content" onClick={this.gg}>
        <img src="../../assets/images/banner.png" className="img-fluid w-100" alt="Banner" />
        <Currency />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    gg: state
});

export default connect(mapStateToProps)(Header);
