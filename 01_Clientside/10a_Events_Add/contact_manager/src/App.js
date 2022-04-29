import React from 'react';
// We can use the 'as' keyword to create an alias for an import
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

// Import custom components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Contacts from './components/contacts/Contacts';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
// 20. Bring in our EditContact component
import EditContact from './components/contacts/EditContact';

// The Router needs to wrap our application.
function App() {
  return (
    <Router>
      <Header branding='Contact Manager'/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Contacts />} />
          <Route path='about' element={<About />} />
          <Route path='add' element={<AddContact />}/>
          {/* 21. Add in the route for EditContact */}
          {/* Note the :id, we use this for dynamic routing */}
          <Route path='edit/:id' element={<EditContact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
// 22. Test and done

export default App;
