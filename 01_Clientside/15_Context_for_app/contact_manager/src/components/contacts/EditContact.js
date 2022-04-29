// This file will have major changes.
import React, { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// 32. bring in the consumer and axios.
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
  // 33. We need to create an async function to run inside the hook.

  useEffect(() => {
    const getContact = async(id) => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
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
    // 34. Call the async function.
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
    // 35. Make our API Call.
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);
    console.log(res.data);
    // 36. Dispatch the action to the reducer
    dispatch(({ type: 'UPDATE_CONTACT', payload: res.data}));
   
    // We can do other things after we send off our newContact
    // Redirect the broswer back to the home page ('/')
    navigate('/', { replace: true });
  }
// 37. Add in the Consumer
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
              {/* 38. change onSubmit */}
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

// 39. Test and Done!
export default EditContact;