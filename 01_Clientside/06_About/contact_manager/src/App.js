import React from 'react';
import './App.css';

// Import custom components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Contacts from './components/contacts/Contacts'
// Import About Component
import About from './components/pages/About';

function App() {
  return (
    <div>
      <Header branding='Contact Manager'/>
      <Contacts />
      {/* Use about component */}
      <About />
      <Footer />
    </div>
  );
}


export default App;
