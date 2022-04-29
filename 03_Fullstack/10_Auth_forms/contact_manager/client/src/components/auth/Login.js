// 6. use rafcp to create the boilerplate.
// 7. add in Fragment and useState to the react import. We will use Fragment in our return and need to useState to hold state.

import React, {Fragment, useState} from 'react';
// 8. Import Link from our Router
import { Link } from 'react-router-dom';
// 9. Import classnames for error messages
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Login = props => {

  // 10. Set up the state for our login form
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    errors: {}
  });

  // 11. Destructure our state so we can use the variables.
  const { email, password, errors } = formData;

  // 12. Set up the onChange function
  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  })

  // 13. Set up onSubmit
  const onSubmit = (e) => {
    // Prevent refresh.
    e.preventDefault();
    console.log('On Submit - login')
  }

  // 14. add in our form
  return (
    <Fragment>
      <h1 className='text-primary'>Login to the System</h1>
      <div className='card mb-3'>
        <div className='card-header'>
          Login
        </div>
        <div className='card-body'>
          {/* Change onSubmit call */}
          <form onSubmit={e => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='email'>Email</label>
              <input 
                type='text'
                className={classnames('form-control', { 'is-invalid' : errors.email }) }
                id='email'
                placeholder='Email'
                name='email'
                value={email} 
                onChange={e => onChange(e)}
              />
              {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>password</label>
              <input 
                type="password"
                // use classnames module
                className={classnames('form-control', { 'is-invalid' : errors.password }) }
                id='password'
                placeholder='password'
                name='password'
                value={password}
                onChange={e => onChange(e)}
              />
              {/* Error message rendering */}
              {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
            </div>
            <div className='d-grid gap-2'>
              <input type='submit' value='Login' className='btn btn-light '/>
            </div>
          </form>
        </div>
        <p className='m-1'>
          Don't have an account? <Link to='/register'>Sign Up</Link>  
        </p>
      </div>
    </Fragment>
  )
}
// 15. open Register.js

Login.propTypes = {}

export default Login;