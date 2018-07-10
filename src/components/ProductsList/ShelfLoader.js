import React, { Component } from 'react';

const ShelfLoaderStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  opacity: 0.75
};

class ShelfLoader extends Component {

  render() {
    return (
        <div style={ShelfLoaderStyles}> </div>
    )
  }
}

export default ShelfLoader;
