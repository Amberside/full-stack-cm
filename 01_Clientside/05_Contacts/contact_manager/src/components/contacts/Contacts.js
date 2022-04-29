// 3. Use rcc  create code.
import React, { Component } from 'react'
// 4. Move the export default to the end of the file.
class Contacts extends Component {
  // 5. State holds the data for this component.
  state = {
    clients: [
      {id: 1, name: 'Mary Fuller', email: "mfuller@gmail.com", phone: '631-434-384-343'},
      {id: 2, name: 'Marty Riker', email: "mriker@gmail.com", phone: '631-444-664-453'},
      {id: 3, name: 'Joanus Smith', email: "jmsmith@gmail.com", phone: '631-492-783-435'}
    ]
  }
  render() {
    // The return will display our clients.
    // 6. We can access the state by using this.state
    return (
      <div className='container mt-3'>
        <div className='card card-body mb-3'>
          {/* We can use {} to access variables */}
          <h2>{this.state.clients[0].name}</h2>
        </div>
        <div className='card card-body mb-3'>
          {/* We can use {} to access variables */}
          <h2>{this.state.clients[1].name}</h2>
        </div>
        <div className='card card-body mb-3'>
          {/* We can use {} to access variables */}
          <h2>{this.state.clients[2].name}</h2>
        </div>
      </div>
    )
  }
  // 7. open App.js
}

export default Contacts;