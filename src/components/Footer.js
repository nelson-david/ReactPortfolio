import React from 'react';

const Footer = () => {
	return (
	    <footer className="page-footer font-small darken-3 footer_cont">
	      <div className="container">
	        <div className="row">
	          <div className="col-md-12 py-5">
	            <div className="mb-5 flex-center">
	              <a href="facebook" className="fb-ic">
	                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
	              </a>
	              <a href="facebook" className="tw-ic">
	                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
	              </a>
	              <a href="facebook" className="gplus-ic">
	                <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
	              </a>
	              <a href="facebook" className="li-ic">
	                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
	              </a>
	              <a href="facebook" className="ins-ic">
	                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
	              </a>
	              <a href="facebook" className="pin-ic">
	                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
	              </a>
	            </div>
	          </div>
	        </div>
	      </div>
	      <div className="footer-copyright text-center py-3 footer_bottom">© 2020 Copyright:
	        <a href="https://davidnelson.com"> David Nelson</a>
	      </div>
	    </footer>
	)
}

export default Footer;