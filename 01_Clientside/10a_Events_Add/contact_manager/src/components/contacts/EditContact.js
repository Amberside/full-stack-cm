// 9. We can cheat a little and copy the code from AddContact.js and change it a little here. 
// 10. We need to make some changes to this file.
// The render() is not needed in a arrow functional component
// This form will not work as intended until we make some changes to our application.

import React, { Fragment } from 'react';
// 11. This is a hook.
import { useParams } from 'react-router-dom'

// 12. changing to an arrow based functional component
const EditContact = (props) =>  {
  
  // Check our props
  console.log(props);
  // Use the hook to check for the id we are using.
  // in the class based and using react-router-dom v5
  // we would do this with this.props.match.params;
  const {id} = useParams();
  console.log(id);

  // const onChange = e => {
    // this.setState({
      // [e.target.name]: e.target.value
    // });
  // }

  // 13. Note that all functions now start with a const keyword.
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
  // 14. comment out the onchange and value attributes for now.
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
// 15. Open SingleContact.js
export default EditContact;