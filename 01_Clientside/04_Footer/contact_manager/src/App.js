import React from 'react';
import './App.css';

// Import custom components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div>
      <Header branding='Contact Manager'/>
      <Footer />
    </div>
  );
}


export default App;
