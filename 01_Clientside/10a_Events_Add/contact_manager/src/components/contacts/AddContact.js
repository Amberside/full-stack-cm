
import React, { Component, Fragment } from 'react'

class AddContact extends Component {
  // Create State for the component
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };
  // In React, forms are controlled components.
  // We need to add in a onChange event to our inputs to change the state.
  // 5. write the onChange function
  onChange = e => {
    // The e is the event object that is passed through.
    // The setState function uses array destructuring to select the correct part of state to update.
    // This then updates the state with the value in our input box.
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // 7. Write the onSubmit function
  // This function will hold our code for submitting our form
  // We can add in code here for client-side validation too.

  onSubmit = (e) => {
    // This will stop our browser from refreashing.
    // Helpful for client-sode validation.
    e.preventDefault();
    console.log('OnSubmit running..')
    // destructing state
    const {name, email, phone } = this.state;

    // Check for errors.
    // Bootstrap has classes we can use for form validation
    // Check:
    // https://getbootstrap.com/docs/5.1/forms/validation/

    // create a newContact object.
    const newContact = {
      // id: uuidv4()
      name,
      email,
      phone
    }

    // Send the newContact to an API or to state management
    console.log(newContact);
    // We can do other things after we send off our newContact
    // Redirect the broswer back to the home page ('/')
    // this.props.history.push('/');
  }
// 8. create EditContact.js and open it.

  render() {
    const { name, email, phone } = this.state;
    return (
      <Fragment>
        <h1 className='text-primary'>Add New Contact</h1>
        <div className='card mb-3'>
          <div className='card-header'>
            Add Contact
          </div>
          <div className='card-body'>
            {/* 6. Add in the onSubmit event */}
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className='mb-3'>
                {/* We need an onChange for our inputs */}
                <label htmlFor='name'>Name</label>
                <input 
                  type='text'
                  className='form-control'
                  id='name'
                  placeholder='Name'
                  name='name'
                  value={name} 
                  // 2. Add in onChange
                  onChange = {this.onChange}
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
                  // 3. Add in onChange
                  onChange = {this.onChange}
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
                  // 4. Add in onChange
                  onChange = {this.onChange}
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

