
import React, { Component, Fragment } from 'react'
import { Consumer } from '../../context';
import axios from 'axios';
// 9. Import our wrapper.
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
    // Bootstrap has classes we can use for form validation
    // Check:
    // https://getbootstrap.com/docs/5.1/forms/validation/

    // create a newContact object.
    const newContact = {
      name,
      email,
      phone
    }

    // Send the newContact to an API or to state management
    console.log(newContact);

    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);

    dispatch({ type: 'ADD_CONTACT', payload: res.data});
    // Redirect the broswer back to the home page ('/')
    // 10.  we can now use this.props.navigate to redirect our application. The '/' will redirect to the page we are displaying in '/'; 
    // (this is like using our useNavigate hook in our EditContact component)
    this.props.navigate('/');
  }


  render() {
    const { name, email, phone } = this.state;
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

// 11. Wrap our AddContact component with our wrapper. 
export default withNavigation(AddContact);

// 12. Test and done!
