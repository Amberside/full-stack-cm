
import React, { Component } from 'react';
// Import custom components
import SingleContact from './SingleContact';

class Contacts extends Component {
  // State holds the data for this component.
  state = {
    clients: [
      {id: 1, name: 'Mary Fuller', email: "mfuller@gmail.com", phone: '631-434-384-343'},
      {id: 2, name: 'Marty Riker', email: "mriker@gmail.com", phone: '631-444-664-453'},
      {id: 3, name: 'Joanus Smith', email: "jmsmith@gmail.com", phone: '631-492-783-435'}
    ]
  }
  // function to get the id and update the state.
  handleDelete = (id) => {
    // console.log('Handle Delete ', id);
    // This method will return an array with the contact with the id we pass through removed
    const clients = this.state.clients.filter(contact => contact.id !== id);
    // 18. Set the state with the filted array.
    this.setState({ clients});
  }
  

  render() {
    // The return will display our clients.
    return (
      <div className='mt-3'>
        <h1 className='text-primary'>Contact List</h1>
        { this.state.clients.map(contact => (
          <SingleContact key={contact.id} contact={contact} handleDelete={this.handleDelete.bind()}/>
          // 20. Open SingleContact
        ))}
      </div>
    )
  }
}

export default Contacts;