
import React, { Component, Fragment } from 'react';
// import the classnames library
import classnames from 'classnames';
import axios from 'axios';

// import custom components
import { Consumer } from '../../context';
import { withNavigation } from '../../wrapper/util';

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
  
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async(dispatch, e) => {
    e.preventDefault();
    console.log('OnSubmit running..')
    const {name, email, phone } = this.state;

    // Check for errors.
    // we can add in our validation here.
    // We can also create validatation functions and call the, here, or get a validation library and use that.
    // For this example we will keep it simple.
    // Check for errors in the name field.
    if (name === ''){
      // this sets errors.name state value
      this.setState({ errors: {name: 'Name is required '}});
      return; // this will stop the onSubmit from running
    }
    // Check for errors in the email field
    if (email === ''){
      this.setState({ errors: {email: 'Email is required '}});
      return; 
    }
    // Check for errors in the phone field
    if (phone === ''){
      this.setState({ errors: {phone: 'Phone is required '}});
      return; 
    }
    // we call also use Bootstrap -isValid -isInvalid 
    // we can change the classes dynamically

    // create a newContact object.
    const newContact = {
      name,
      email,
      phone
    }

    // Send the newContact to an API or to state management
    console.log(newContact);
    // 17. connect the onSubmit call to our api. The endpoint here is '/api/contact/add
    const res = await axios.post('/api/contact/add', newContact);
    // 18. open server/src/server.js
    console.log(res.data);
    
    dispatch({ type: 'ADD_CONTACT', payload: res.data});
    // Redirect the broswer back to the home page ('/')
    this.props.navigate('/');
  }


  render() {
    // 14. Add errors into our distructing
    const { name, email, phone, errors } = this.state;
    return (
      
      <Consumer>
        {/* destructing dispatch from our context */}
        {
        value => {
          const { dispatch } = value;
          return (
            <Fragment>
               <h1 className='text-primary'>Add New Contact</h1>
                <div className='card mb-3'>
                  <div className='card-header'>
                    Add Contact
                  </div>
                  <div className='card-body'>
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      <div className='mb-3'>
                        <label htmlFor='name'>Name</label>
                        {/* Update the input to make use of the errors state if there is one. */}
                        <input 
                          type='text'
                          // 15. use classnames module to add classes
                          // classnames('true class', { conditional class : test})
                          className={classnames('form-control', { 'is-invalid' : errors.name }) }
                          id='name'
                          placeholder='Name'
                          name='name'
                          value={name} 
                          onChange = {this.onChange}
                        />
                        {/* 16. conditional rendering. This code will check if there is an entry in errors.name, if there is it will render the message insdie a div with the class invalid-feedback */}
                         {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                      </div>
                      <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input 
                          type="text"
                          // 17. use classnames module
                          className={classnames('form-control', { 'is-invalid' : errors.email }) }
                          id='email'
                          placeholder='Email'
                          name='email'
                          value={email}
                          onChange = {this.onChange}
                        />
                        {/* 18. Error message rendering */}
                        {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                      </div>
                      <div className='mb-3'>
                        <label htmlFor='phone'>Phone</label>
                        <input 
                          type="text"
                          // 19. use classnames module
                          className={classnames('form-control', { 'is-invalid' : errors.phone }) }
                          id='phone'
                          placeholder='Phone'
                          name='phone'
                          value={phone}
                          onChange = {this.onChange}
                        />
                        {/* 20. Error message rendering */}
                        {errors.phone && <div className='invalid-feedback'>{errors.phone}</div>}
                      </div>
                      <div className='d-grid gap-2'>
                        <input type='submit' value='Add Contact' className='btn btn-light '/>
                      </div>
                    </form>
                  </div>
                </div>
              </Fragment>
          ) // end inner return
        } // end 
      } 
      </Consumer>
    ) // end outer return
  } // end of render
} // end of AddContact component

// 21. Test your work, then use the same steps in EditContact.js

// Wrap our AddContact component with our wrapper. 
export default withNavigation(AddContact);


