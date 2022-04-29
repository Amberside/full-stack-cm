
import React, { Component, Fragment } from 'react'
// 23. Comment out the uuid import.
// import { v4 as uuidv4 } from 'uuid';
// 24. import the consumer
import { Consumer } from '../../context';
// 25. import axios
import axios from 'axios';

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
  }
  // 26. Changes to onSubmit.
  // change the call to axios
  onSubmit = async(dispatch, e) => {
    e.preventDefault();
    console.log('OnSubmit running..')
    const {name, email, phone } = this.state;

    // Check for errors.
    // Bootstrap has classes we can use for form validation
    // Check:
    // https://getbootstrap.com/docs/5.1/forms/validation/

    // create a newContact object.
    const newContact = {
      // id: uuidv4(),
      name,
      email,
      phone
    }

    // Send the newContact to an API or to state management
    console.log(newContact);
    // 27. Add in the axios request to the api
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
    // 28. Dispatch the action to the reducer.
    dispatch({ type: 'ADD_CONTACT', payload: res.data});
    // Redirect the broswer back to the home page ('/')
    // this.props.history.push('/');
    // This does not work in router v6. (works in v5)

  }


  render() {
    const { name, email, phone, errors } = this.state;
    return (
      // 29. Wrap the component in the consumer.
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
                    {/* 30. Change the onsubmit function*/}
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      <div className='mb-3'>
                        <label htmlFor='name'>Name</label>
                        <input 
                          type='text'
                          className='form-control'
                          id='name'
                          placeholder='Name'
                          name='name'
                          value={name} 
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
          ) // end inner return
        } // end 
      } 
      </Consumer>
    ) // end outer return
  } // end of render
} // end of AddContact component

export default AddContact;
// 31. open EditContact.js
