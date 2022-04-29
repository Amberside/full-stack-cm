
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Import the icons we wish to use.
import { FaHome, FaPlus, FaQuestion } from 'react-icons/fa';
const Header = (props) => {
// We can check the props by 
// console.log(props);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.branding}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/"><FaHome /> Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add"><FaPlus/> Add</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'><FaQuestion/> About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  branding: 'My App'
}

// We can use the following proptypes to check the data being passed through
Header.propTypes = {
  branding: PropTypes.string 
}

export default Header;