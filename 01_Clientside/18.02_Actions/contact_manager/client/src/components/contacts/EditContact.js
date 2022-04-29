
import React, { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Consumer } from '../../context';
import axios from 'axios';

// Changing to an arrow based functional component
const EditContact = (props) =>  {

  // set our state for the form
  const [formData, setFromData] = useState({
    id: '',
    name: '',
    email: '',
    phone: ''
  });

  // Check our props
  // console.log(props);
  const {id} = useParams();
  const navigate = useNavigate();

  // We need to use the useEffect hook to set our state.
  useEffect(() => {
    const getContact = async(id) => {
      // 25. change the call here to our endpoint for getting a single user.
      // /api/contact/:id
      const res = await axios.get(`/api/contact/${id}`);
      const contact = res.data;
      console.log(contact);
      // Use the setFormData to set our state:
      // Set state;
      setFromData({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone
      });
    };
    
    getContact(id);
    // The array here holds dependences. These are what triggers any updates or refreshes to the component.
  }, [id]);

  // Destructure the formData from state.
  const { name, email, phone } = formData;

  // the onchange function.
  const onChange = e => setFromData(
    {...formData, [e.target.name]: e.target.value}
  );
  
  

// onSubmit;
  const onSubmit = async(dispatch, e) => {
    e.preventDefault();
    console.log('OnSubmit Edit running..');
    console.log(`${id} ${name} ${phone} ${email}`)
    // create a update contact object.
    const updContact = {
      name,
      email,
      phone
    }

    // Check for errors.
    // Send the newContact to an API or to state management
    console.log(updContact);
    // 26. change the call to our edit endpoint:
    // /api/contact/edit/:id
    const res = await axios.put(`/api/contact/edit/${id}`, updContact);
    console.log(res.data);
    
    dispatch(({ type: 'UPDATE_CONTACT', payload: res.data}));
   
    // We can do other things after we send off our newContact
    // Redirect the broswer back to the home page ('/')
    navigate('/');
  }
  // 27. test the delete and update. 
  // 28. Done!!

  return (
    <Consumer>
      { value => {
        const { dispatch } = value;
        return (
          <Fragment>
          <h1 className='text-primary'>Edit Contact</h1>
          <div className='card mb-3'>
            <div className='card-header'>
              Add Contact
            </div>
            <div className='card-body'>
              <form onSubmit={(e) => onSubmit(dispatch, e)}>
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
        ) // End inner return
      }} 
      {/* end of value */}
    </Consumer>
  ) // end of outer return
} // end of component.

export default EditContact;