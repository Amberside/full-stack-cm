import React, { Component } from 'react';
// We can use the 'as' keyword to create an alias for an import
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

// Import custom components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Contacts from './components/contacts/Contacts';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

// The Router needs to wrap our application.
class App extends Component {
  // Set the state for our application
  state = {
    clients: [
      {id: '1', name: 'Mary Fuller', email: "mfuller@gmail.com", phone: '631-434-384-343'},
      {id: '2', name: 'Marty Riker', email: "mriker@gmail.com", phone: '631-444-664-453'},
      {id: '3', name: 'Joanus Smith', email: "jmsmith@gmail.com", phone: '631-492-783-435'}
    ]
  }
  // Event functions
  handleAdd = (contact) => {
    console.log('Add contact app.js ', contact);
    // Set state to add in the new contact.
    this.setState({ clients: [...this.state.clients, contact]})

  }

  
  handleDelete = (id) => {
    console.log('Delete contact app.js ', id);
    // The filter function. This removes a contact from our state
    const clients = this.state.clients.filter(contact => contact.id !== id);
    this.setState({ clients});

  }

  handleUpdate = (id, contact) => {
    console.log('Update contact app.js', id, contact);
    // 19. We now need to update our state from the data in our update form.
    // We can use a map function to change what we need.
    // We check to see if the id is equal to the one we passed through. We use a ternary operator to test and change that part of the index.
    const clients = this.state.clients.map(client => client.id  === id.id ? 
      {...client, 
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    } : client);
    this.setState({clients});
  }
  getContact = (id) => {
    console.log('Get contact app.js ', id);
    // We need to find the contact in our state.
    // We can do this by using the .find() array method.
    // 7. Array.find( ) method.
    const contact = this.state.clients.find(client => client.id === id.id);
    console.log('get C: ', contact);
    return contact;
    // 8. go back to EditContact.js
  }

  render(){
    return (
      <Router>
        <Header branding='Contact Manager'/>
        <div className='container'>
          <Routes>
            <Route 
              path='/' 
              element={
                <Contacts 
                  clients={this.state} 
                  handleDelete={this.handleDelete.bind()}
                />} 
            />
            <Route path='about' element={<About />} />
            <Route 
              path='add' 
              element={
                <AddContact 
                  handleAdd={this.handleAdd.bind()}
                />}
            />
            {/* 18. Add in the handleUpdate prop and pass through the handleUpdate function */}
            <Route 
              path='edit/:id' 
              element={
                <EditContact 
                  getContact={this.getContact.bind()}
                  handleUpdate={this.handleUpdate.bind()}
                />} 
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    );
  }
}


export default App;
