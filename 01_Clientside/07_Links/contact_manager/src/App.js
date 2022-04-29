import React from 'react';
// 3. Import the router to use it.
// We can use destructuring to import specific items from a component/package
// We can use the 'as' keyword to create an alias for an import
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

// Import custom components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Contacts from './components/contacts/Contacts';
import About from './components/pages/About';
// 15. Import AddContact
import AddContact from './components/contacts/AddContact';
// 4. The Router needs to wrap our application.
// Change the div wrapper to the Router
function App() {
  return (
    <Router>
      <Header branding='Contact Manager'/>
      {/* This will allow all components to be in a container */}
      <div className='container'>
        {/* 5. We Routes to allow the changing of pages. */}
        <Routes>
          {/* 6. We use the Route for display of components */}
          <Route path='/' element={<Contacts />} />
          <Route path='about' element={<About />} />
          {/* 16. Add in the route for AddContact */}
          <Route path='add' element={<AddContact />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
  // 7. Open Header.js
  // 17. Test and Done.
}


export default App;
