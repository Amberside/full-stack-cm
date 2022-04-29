// 10. Remove the import of the logo.
// 11. import React from 'react'

import React from 'react';
import './App.css';

// 12. Bring in the components we just created.
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
// Note that when we import components without using them they will be underlined in yellow as we have not used the, yet.

// 13. Remove the code in our app, and include our new components
// Remember that a React component can only have one parent container
function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
// 14. Test and Done!

export default App;
