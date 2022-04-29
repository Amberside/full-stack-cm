// 4. open https://getbootstrap.com/docs/5.1/components/navbar/
// 5. Copy asome navabar code for your header.
import React from 'react';
// 11. We can use PropTypes to enforce type checking.
import PropTypes from 'prop-types';

// 6. Add in props so we can access the props passed into this component
const Header = (props) => {
// 7. We can check the props by 
console.log(props);
// destructing objects
// const { branding } = props;
  return (
    // 8. Change the navbar-light to navbar-dark
    // 9. Change the bg-light to bg-danger
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
// 10. Will will look at fixing the Links later.

// 12. We can set default props if no props are passed into the component
Header.defaultProps = {
  branding: 'My App'
}

// 13. We can use the following proptypes to check the data being passed through
Header.propTypes = {
  branding: PropTypes.string 
}
// PropTypes.string shortcut: pts

export default Header

