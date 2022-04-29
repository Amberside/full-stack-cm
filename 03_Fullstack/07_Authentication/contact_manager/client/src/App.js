// To reconfigure our app to use redux, we need to remove all the context things and add in the redux functions that are needed.
// We still need our Provider, only this will be from redux now.
// We also need to import our store.

import React from 'react';
// We can use the 'as' keyword to create an alias for an import
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

// Import redux and state things
import { Provider } from 'react-redux';
import store from './store';


// Import custom components

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Contacts from './components/contacts/Contacts';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

const App  = () => {
  return (
    <Provider store={store}>
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

export default App;

