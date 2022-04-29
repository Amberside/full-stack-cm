
import React, { Component } from 'react';
// Import custom components
import SingleContact from './SingleContact';
// 7. We need to import the consumer from our context
// Remember that our context is in our src directory.
import { Consumer } from '../../context';

class Contacts extends Component {
  // 8. remove the handle delete function.
  
  render() {
    // 9. remove the comments and destructuring
    // 10. we need to wrap our component in the Consumer.
    // remember that this is a subscription service which will update when the state updates.
    return (
      <Consumer>
        {/* 11. To access the state we need to access the contacts array which is stored prop value*/}
        { value => {
          const { contacts } = value;
          // 12. This return is what is being rendered.
          return (
            <div className='mt-3'>
              <h1 className='text-primary'>Contact List</h1>
              { contacts.map(contact => (
                // 13. remove the handleDelete
                <SingleContact key={contact.id} contact={contact}/>
              ))}
            </div>
          ) // End of inner return
        }} 
      </Consumer>
    ) // End of component return
  } // End of render
} // End of Contacts component
// 14. open SingleContact.js
export default Contacts;