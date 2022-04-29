
import React, { Component } from 'react';
// 7. Import SingleContact
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
  render() {
    // The return will display our clients.
    // 8. Change our component to call SingleContact and pass through each contact
    return (
      <div className='mt-3'>
        <h1 className='text-primary'>Contact List</h1>
        { this.state.clients.map(contact => (
          <SingleContact key={contact.id} contact={contact} />
        ))}
      </div>
    )
  }
}
// 9. Test and Done

export default Contacts;