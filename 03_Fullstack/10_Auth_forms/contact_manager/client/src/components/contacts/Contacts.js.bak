
import React, { Component } from 'react';
// Import custom components
import SingleContact from './SingleContact';
// Remember that our context is in our src directory.
import { Consumer } from '../../context';

class Contacts extends Component {
  
  render() {
    return (
      <Consumer>
        { value => {
          const { contacts } = value;
          return (
            <div className='mt-3'>
              <h1 className='text-primary'>Contact List</h1>
              { contacts.map(contact => (
                <SingleContact key={contact.id} contact={contact}/>
              ))}
            </div>
          ) // End of inner return
        }} 
      </Consumer>
    ) // End of component return
  } // End of render
} // End of Contacts component

export default Contacts;