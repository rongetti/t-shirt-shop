import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';

class Image extends Component {

  render() {
    const src = `../../../assets/images/products/${this.props.image}`;
    return (
        <ReactImageMagnify {...{
              smallImage: {
                alt: 'Product',
                isFluidWidth: true,
                src: src
              },
              largeImage: {
                src: src,
                width: 1200,
                height: 1800
              },
              enlargedImageContainerStyle: {
                zIndex: 1
              },
              enlargedImagePosition: 'over'
            }} />
    )
  }

}

Image.propTypes = {
  image: PropTypes.string.isRequired
};

export default Image;
