// 16. use rafcp to create the boilerplate.
// 17. add in Fragment and useState to the react import. We will use Fragment in our return and need to useState to hold state.

import React, {Fragment, useState} from 'react';
// 18. import Link from router
import { Link } from 'react-router-dom';
// 19. import classnames
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Register = props => {

  // 20 set up form state.
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: '',
    passwordCompare: '',
    errors: {}
  });

  // 21. Destructure the state so we can use the varables
  const { name, email, password, passwordCompare, errors } = formData;

  // 22. onChange function
  const onChange = e => setFormData(
    {...formData, [e.target.name]: e.target.value}
  );

  // 23. onSumbit function
  const onSubmit = async(e) =>{
    // This wil prevent the browser from refreshing the page.
    e.preventDefault();
    console.log('On Submit - Register');
  };

  // 24. Set up our form.
  return (
    <Fragment>
      <h1 className='text-primary'>Register for the System</h1>
      <div className='card mb-3'>
        <div className='card-header'>
          Register
        </div>
        <div className='card-body'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='name'>Name</label>
              <input 
                type='text'
                className={classnames('form-control', { 'is-invalid' : errors.name }) }
                id='name'
                placeholder='Name'
                name='name'
                value={name} 
                onChange={e => onChange(e)}
              />
              {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
            </div>
            <div className='mb-3'>
              <label htmlFor='email'>Email</label>
              <input 
                type="text"
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
              <label htmlFor='password'>Password</label>
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
            <div className='mb-3'>
              <label htmlFor='passwordCompare'>Reenter Password</label>
              <input 
                type="password"
                // use classnames module
                className={classnames('form-control', { 'is-invalid' : errors.passwordCompare }) }
                id='passwordCompare'
                placeholder='passwordCompare'
                name='passwordCompare'
                value={passwordCompare}
                onChange={e => onChange(e)}
              />
              {/* Error message rendering */}
              {errors.passwordCompare && <div className='invalid-feedback'>{errors.passwordCompare}</div>}
            </div>
            <div className='d-grid gap-2'>
              <input type='submit' value='Register' className='btn btn-light '/>
            </div>
            <p className='m-1'>
              Already have an account? <Link to='/login'>Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  )
};
//  25. open src/layout/Header.js

Register.propTypes = {};

export default Register;