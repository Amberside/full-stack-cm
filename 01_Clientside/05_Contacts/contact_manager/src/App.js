import React from 'react';
import './App.css';

// Import custom components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
// 8. Bring in the contacts component
import Contacts from './components/contacts/Contacts'

function App() {
  return (
    <div>
      <Header branding='Contact Manager'/>
      {/* 9. Use the contact component */}
      <Contacts />
      <Footer />
    </div>
  );
}
// 10. Test and done!

export default App;
