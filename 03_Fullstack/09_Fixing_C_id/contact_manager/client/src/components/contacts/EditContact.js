// This component is already an arrow function. 
// There are some minor changes we need to make
import React, { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Import propTypes and connect
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Import functions from our action file. getContact & updateContact
import { getContact, updateContact } from '../../actions/contactActions';

// Changing to an arrow based functional component
const EditContact = ({ 
  contact: { contact},
  getContact,
  updateContact
}) =>  {

  // set our state for the form
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    errors: {}
  });

  // Check our props
  // console.log(props);
  const {id} = useParams();
  const navigate = useNavigate();
  // Destructure the formData from state.
  const { name, email, phone } = formData;

  // We need to change useEffect function to make use of our actions
  // We need to use the useEffect hook to set our state.
  useEffect(() => {
    getContact(id);
   
    setFormData({
      id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });

    // The array here holds dependences. These are what triggers any updates or refreshes to the component.
  }, [getContact, id, contact.name, contact.email, contact.phone]);


  // the onchange function.
  const onChange = e => setFormData(
    {...formData, [e.target.name]: e.target.value}
  );

// Change the onSubmit to add in updateContact function;
// 17. change our updContact object
  const onSubmit = async(e) => {
    e.preventDefault();
    console.log('OnSubmit Edit running..');
    console.log(`${id} ${name} ${phone} ${email}`)
    // create a update contact object.
    // 18. Change the id in our contact object
    const updContact = {
      C_id: id,
      name,
      email,
      phone
    }
    //  19. Test your app & done!
    
    // Check for errors.
  
    console.log(updContact);

    // change the call to our updateContact function
    updateContact(updContact);
    // We can do other things after we send off our newContact
    // Redirect the broswer back to the home page ('/')
    navigate('/');
  }
// remove the return and value parts here. We only need the inner return and the code within it.
  return (
    <Fragment>
    <h1 className='text-primary'>Edit Contact</h1>
    <div className='card mb-3'>
      <div className='card-header'>
        Add Contact
      </div>
      <div className='card-body'>
        <form onSubmit={e => onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input 
              type='text'
              className='form-control'
              id='name'
              placeholder='Name'
              name='name'
              value={name} 
              onChange = {(e) => onChange(e)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
              <input 
                type="text"
                className='form-control'
                id='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange = {(e) => onChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='phone'>Phone</label>
              <input 
                type="text"
                className='form-control'
                id='phone'
                placeholder='Phone'
                name='phone'
                value={phone}
                onChange = {(e) => onChange(e)}
              />
            </div>
            <div className='d-grid gap-2'>
              <input type='submit' value='Update Contact' className='btn btn-light '/>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  ) // End return
} // end of component.

// Create propTypes
EditContact.propTypes = {
  getContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  contact: PropTypes.object,
};

const mapStateToProps = state => ({
  contact: state.contact
});

// Use connect
export default connect(mapStateToProps, {getContact, updateContact})(EditContact);