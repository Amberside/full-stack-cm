
import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
// We can check the props by 
console.log(props);
// destructing objects
// const { branding } = props;
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{props.branding}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Add</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
// Will will look at fixing the Links later.

Header.defaultProps = {
  branding: 'My App'
}

// We can use the following proptypes to check the data being passed through
Header.propTypes = {
  branding: PropTypes.string 
}

export default Header

