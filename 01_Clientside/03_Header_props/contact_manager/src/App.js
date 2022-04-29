import React from 'react';
import './App.css';

// Import custom components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'


// 2. add in the attribute for props
function App() {
  return (
    <div>
      <Header branding='Contact Manager'/>
      <Footer />
    </div>
  );
}
// 3. Open layout/Header.js

export default App;
