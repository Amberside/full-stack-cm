
import React, { Component } from 'react';
// Import custom components
import SingleContact from './SingleContact';

class Contacts extends Component {
  // Handle delete.
  handleDelete = (id) => {
    console.log('Handle Delete contact.js', id);
    // use props to call the function from app.js
    this.props.handleDelete(id);
  }

  render() {
    // The return will display our clients.
    // console.log(this.props);
    // Destructure the client array from props
    const {clients} = this.props.clients;
    return (
      <div className='mt-3'>
        <h1 className='text-primary'>Contact List</h1>
        { clients.map(contact => (
          <SingleContact key={contact.id} contact={contact} handleDelete={this.handleDelete.bind()}/>
        ))}
      </div>
    )
  }
}

export default Contacts;