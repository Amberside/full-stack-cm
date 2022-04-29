// The render() is not needed in a arrow functional component
// This form will not work as intended until we make some changes to our application.

import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'

// Changing to an arrow based functional component
const EditContact = (props) =>  {
  
  // Check our props
  console.log(props);
  const {id} = useParams();
  console.log(id);

  // const onChange = e => {
    // this.setState({
      // [e.target.name]: e.target.value
    // });
  // }


  const onSubmit = (e) => {
    e.preventDefault();
    console.log('OnSubmit Edit running..');

    // create a update contact object.
    // const updContact = {
      // id
      // name,
      // email,
      // phone
    // }

    // Check for errors.
    // Send the newContact to an API or to state management
    // console.log(updContact);
    // We can do other things after we send off our newContact
    // Redirect the broswer back to the home page ('/')

  }

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
                // value={name} 
                // onChange = {this.onChange}
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
                // value={email}
                // onChange = {this.onChange}
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
                // value={phone}
                // onChange = {this.onChange}
              />
            </div>
            <div className='d-grid gap-2'>
              <input type='submit' value='Update Contact' className='btn btn-light '/>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default EditContact;