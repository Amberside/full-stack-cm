// 31. use rafc to create bolierplate.
// import Fragment & useState
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
// 32. import classnames & useNavigate
import classnames from 'classnames';
import {useNavigate} from 'react-router-dom';
// 33. import connect
import { connect } from 'react-redux'
// 34. import addContact from our actions file
import { addContact } from '../../actions/contactActions';

const AddContact = ({ addContact }) => {
  // 35. create our component level state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    errors: {}
  });
  // Destructure formData from state
  const { name, email, phone, errors} = formData;
  // Create navigate variable
  const navigate = useNavigate();
  // 36. New onChage
  const onChange = e => setFormData(
    {...formData, [e.target.name]: e.target.value }
    );
  // 37. New onSubmit
  const onSubmit = async e => {
    // preventDefault
    e.preventDefault();
    // Check for errors, we can copy this code from our old component.
    // Check for errors in the name field.
    if (name === ''){
      // this sets errors.name state value
      setFormData({ errors: {name: 'Name is required '}});
      return; // this will stop the onSubmit from running
    }
    // Check for errors in the email field
    if (email === ''){
      setFormData({ errors: {email: 'Email is required '}});
      return; 
    }
    // Check for errors in the phone field
    if (phone === ''){
      setFormData({ errors: {phone: 'Phone is required '}});
      return; 
    }
    // create a newContact object.
    const newContact = {
      name,
      email,
      phone
    }
    // 38. Call the addContact action.
    addContact(newContact);
    // 39. redirect to home page
    navigate('/');
  };

  // 40. copy the return from our old component
  return (
    <Fragment>
        <h1 className='text-primary'>Add New Contact</h1>
        <div className='card mb-3'>
          <div className='card-header'>
            Add Contact
          </div>
          <div className='card-body'>
            {/* 41. Change onSubmit call */}
            <form onSubmit={e => onSubmit(e)}>
              <div className='mb-3'>
                <label htmlFor='name'>Name</label>
                {/* Update the input to make use of the errors state if there is one. */}
                <input 
                  type='text'
                  // classnames('true class', { conditional class : test})
                  className={classnames('form-control', { 'is-invalid' : errors.name }) }
                  id='name'
                  placeholder='Name'
                  name='name'
                  value={name} 
                  // 42. Change the onChange call
                  onChange={e => onChange(e)}
                />
                {/* conditional rendering. This code will check if there is an entry in errors.name, if there is it will render the message insdie a div with the class invalid-feedback */}
                  {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
              </div>
              <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input 
                  type="text"
                  // use classnames module
                  className={classnames('form-control', { 'is-invalid' : errors.email }) }
                  id='email'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={e => onChange(e)}
                />
                {/* Error message rendering */}
                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
              </div>
              <div className='mb-3'>
                <label htmlFor='phone'>Phone</label>
                <input 
                  type="text"
                  // use classnames module
                  className={classnames('form-control', { 'is-invalid' : errors.phone }) }
                  id='phone'
                  placeholder='Phone'
                  name='phone'
                  value={phone}
                  onChange={e => onChange(e)}
                />
                {/* Error message rendering */}
                {errors.phone && <div className='invalid-feedback'>{errors.phone}</div>}
              </div>
              <div className='d-grid gap-2'>
                <input type='submit' value='Add Contact' className='btn btn-light '/>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
  )
}

// 43. add in proptypes
AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
}

// 44. add in connect.
// remember connect(mapStateToProps, {functions})(Component)
export default connect(null, { addContact})(AddContact);
// 46. open EditContact.