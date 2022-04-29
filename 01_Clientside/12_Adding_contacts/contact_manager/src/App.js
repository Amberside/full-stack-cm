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
      {id: 1, name: 'Mary Fuller', email: "mfuller@gmail.com", phone: '631-434-384-343'},
      {id: 2, name: 'Marty Riker', email: "mriker@gmail.com", phone: '631-444-664-453'},
      {id: 3, name: 'Joanus Smith', email: "jmsmith@gmail.com", phone: '631-492-783-435'}
    ]
  }
  // Event functions
  handleAdd = (contact) => {
    console.log('Add contact app.js ', contact);
    // 7. test that the handleAdd function is called.
    // 8. Add the new contact to state.
    // const oldClients = this.state.clients;
    // console.log(oldClients);
    // const clients = [...oldClients, contact];
    // this.setState({clients});
    this.setState({ clients: [...this.state.clients, contact]})
    // 9. Test code and see if the new contact is added.
  }
  // 10. Done!
  
  handleDelete = (id) => {
    console.log('Delete contact app.js ', id);
    // The filter function. This removes a contact from our state
    const clients = this.state.clients.filter(contact => contact.id !== id);
    this.setState({ clients});

  }

  handleUpdate = (id, contact) => {
    console.log('Update contact app.js', id, contact);
  }
  getContact = (id) => {
    console.log('Get contact app.js ', id);
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
            <Route 
              path='edit/:id' 
              element={
                <EditContact 
                  getContact={this.getContact.bind()}
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
