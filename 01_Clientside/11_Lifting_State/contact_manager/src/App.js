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
// 4. Change to a class based component. Need to import Component above
class App extends Component {
  // 3. Set the state for our application
  state = {
    clients: [
      {id: 1, name: 'Mary Fuller', email: "mfuller@gmail.com", phone: '631-434-384-343'},
      {id: 2, name: 'Marty Riker', email: "mriker@gmail.com", phone: '631-444-664-453'},
      {id: 3, name: 'Joanus Smith', email: "jmsmith@gmail.com", phone: '631-492-783-435'}
    ]
  }
  // 6. Create event functions
  handleAdd = (contact) => {
    console.log('Add contact app.js ', contact);
  }

  handleDelete = (id) => {
    console.log('Delete contact app.js ', id);
    // 16. The filter function:
    const clients = this.state.clients.filter(contact => contact.id !== id);
    this.setState({ clients});
    // 17. Comment out the filter function and test.
    // 18. Once function calls are working, uncomment filter code and test.
    // 19. done.
  }

  handleUpdate = (id, contact) => {
    console.log('Update contact app.js', id, contact);
  }
  getContact = (id) => {
    console.log('Get contact app.js ', id);
  }

  // 5. Add in a render(){ the return goes in here}
  render(){
    return (
      // 7. Add in props to pass the functions
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
// 8. Open Contacts.js

export default App;
