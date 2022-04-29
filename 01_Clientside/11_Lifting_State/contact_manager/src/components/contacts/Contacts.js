
import React, { Component } from 'react';
// Import custom components
import SingleContact from './SingleContact';

class Contacts extends Component {
  // 2. Cut the state out and move it to App.js

  // 13. Change the handle delete.
  handleDelete = (id) => {
    console.log('Handle Delete contact.js', id);
    // Need to call the function passed through from app.js
    // 14. use props to call the function from app.js
    this.props.handleDelete(id);
    // 15. The filter delete code will be moved to app.js
    
  }
  

  render() {
    // The return will display our clients.
    // 9. Log out the props.
    console.log(this.props);
    // 10. Destructure the client array from props
    const {clients} = this.props.clients;
    return (
      <div className='mt-3'>
        <h1 className='text-primary'>Contact List</h1>
        {/* 11. Change this.state.clients to clients */}
        { clients.map(contact => (
          <SingleContact key={contact.id} contact={contact} handleDelete={this.handleDelete.bind()}/>
        ))}
      </div>
    )
  }
}

export default Contacts;