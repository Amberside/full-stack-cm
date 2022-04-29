// To reconfigure our app to use redux, we need to remove all the context things and add in the redux functions that are needed.
// We still need our Provider, only this will be from redux now.
// We also need to import our store.

import React from 'react';
// We can use the 'as' keyword to create an alias for an import
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

// 25. Import redux and state things
import { Provider } from 'react-redux';
import store from './store';


// Import custom components
// 26. remove the provider import from the context.
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Contacts from './components/contacts/Contacts';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

// 27. Change our app to an arrow function.
const App  = () => {
  return (
    // 28. add our store into our provider. 
    // This will give all components access to our state.
    <Provider>
      <Router store={store}>
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

// 29. done!
export default App;

