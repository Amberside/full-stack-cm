
import React, { Component, Fragment } from 'react'

class AddContact extends Component {
  // 23. Create State for the component
  state = {
    name: '',
    email: '',
    phone: '',
  };

  render() {
    // 24. Use destructuring to pull variables out of state.
    const { name, email, phone } = this.state;
    return (
      // Using a fragment does creates a contianer to store React components in.
      // A fragment does not appear in the DOM.
      // 25. Form code.
      <Fragment>
        <h1 className='text-primary'>Add New Contact</h1>
        <div className='card mb-3'>
          <div className='card-header'>
            Add Contact
          </div>
          <div className='card-body'>
            <form>
              <div className='mb-3'>
                <label htmlFor='name'>Name</label>
                <input 
                  type='text'
                  className='form-control'
                  id='name'
                  placeholder='Name'
                  name='name'
                  value={name}
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
                />
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
}

export default AddContact;

