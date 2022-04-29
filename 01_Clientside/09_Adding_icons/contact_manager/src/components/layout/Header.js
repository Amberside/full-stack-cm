
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// 3. Import the icons we wish to use.
import { FaHome, FaPlus, FaQuestion } from 'react-icons/fa';
const Header = (props) => {
// We can check the props by 
console.log(props);
// destructing objects
// const { branding } = props;
// 4. We can now use the imported icons like any other imported component
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">{props.branding}</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              {/* 5. Place the home icon FaHome next to the word home */}
              <Link class="nav-link" to="/"><FaHome /> Home</Link>
            </li>
            <li class="nav-item">
              {/* 6. Place the plus icon FaPlus next to the word add */}
              <Link class="nav-link" to="/add"><FaPlus/> Add</Link>
            </li>
            <li class="nav-item">
              {/* 7. Place the question mark FaQuestion icon next the word question */}
              <Link class="nav-link" to='/about'><FaQuestion/> About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // 8. Open SingleContact.js
  )
}

Header.defaultProps = {
  branding: 'My App'
}

// We can use the following proptypes to check the data being passed through
Header.propTypes = {
  branding: PropTypes.string 
}

export default Header

