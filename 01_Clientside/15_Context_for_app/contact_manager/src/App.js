import React, { Component } from 'react';
// We can use the 'as' keyword to create an alias for an import
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

// Import custom components
// 2. Import Provider from out context
import { Provider } from './context';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Contacts from './components/contacts/Contacts';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

// The Router needs to wrap our application.
class App extends Component {

  // 3. remove state.
  // State is now held in our context
  // 4. remove event functions.
  // These functions are now being handled by our reducer.
  
  render(){
    return (
      // 5. We now need to wrap our component in the Provider we created in our context. This will give all components access to the state.
      // We can also remove the functions that we are passing as props.
      <Provider>
        <Router>
          <Header branding='Contact Manager'/>
          <div className='container'>
            <Routes>
              <Route path='/' element={ <Contacts />} />
              <Route path='about' element={<About />} />
              <Route path='add' element={ <AddContact />} />
              <Route path='edit/:id' element={<EditContact />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
// 6. Open Contacts.js
