import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
        <div className="content t-footer clearfix">
          <div className="container">
            <div className="t-footer-icons text-center text-warning pt-5 pb-5">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img className="t-footer-icon" src="../../assets/images/_ionicons_svg_logo-facebook.svg" alt="Facebook" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img className="t-footer-icon" src="../../assets/images/_ionicons_svg_logo-instagram.svg" alt="Instagram" /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img className="t-footer-icon" src="../../assets/images/_ionicons_svg_logo-twitter.svg" alt="Twitter" /></a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img className="t-footer-icon" src="../../assets/images/_ionicons_svg_logo-youtube.svg" alt="Youtube" /></a>
            </div>
            <div className="t-footer-disclaimer text-center text-white pb-1"><small>Copyright &copy; 2017 T-Shirt Shop, Inc. All rights reserved.</small></div>
          </div>
        </div>
    )
  }
}

export default Footer;
