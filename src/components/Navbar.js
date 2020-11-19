import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

	const [navbarState, setNavbarState] = useState(false);

	const openNavbar = () => {
		setNavbarState(!navbarState);
	}

	return (
	    <nav className="mb-1 navbar navbar-expand-lg navbar-dark nav_blue">
	      <div className="container add_padding">
	        <Link className="navbar-brand" to="/">David Nelson</Link>
	        <button className="navbar-toggler" type="button" onClick={openNavbar}>
	          <span className="navbar-toggler-icon"></span>
	        </button>
	        <div className="collapse navbar-collapse">
	          <ul className="navbar-nav ml-auto">
	            <li className="nav-item">
	              <Link to="/" className="nav-link">Home</Link>
	            </li>
	            <li className="nav-item">
	              <Link to="portfolio" className="nav-link">Portfolio</Link>
	            </li>
	            <li className="nav-item">
	              <Link to="blog" className="nav-link">Blog</Link>
	            </li>
	          </ul>
	          <ul className="navbar-nav ml-auto nav-flex-icons">
	            <li className="nav-item avatar">
	            	<i className="nav-link p-0">
		                <img 
		                	src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" 
		                	className="rounded-circle z-depth-0"
		                  alt="avatar" height="35" />
	            	</i>
	            </li>
	          </ul>
	        </div>
	      </div>
	    </nav>
	)
}

export default Navbar;