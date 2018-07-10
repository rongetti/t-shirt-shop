import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Breadcrumb extends Component {

  render() {
    const {breadcrumbs} = this.props;
    const links = breadcrumbs.links.map(link => <li className="breadcrumb-item" key={link.label}><a href={link.url}>{link.label}</a></li>);
    const active = <li className="breadcrumb-item active" aria-current="page">{breadcrumbs.active}</li>;
    return (
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb t-breadcrumb">
            {links}
            {active}
          </ol>
        </nav>
    )
  }

}

Breadcrumb.propTypes = {
  breadcrumbs: PropTypes.object.isRequired
};

export default Breadcrumb;
