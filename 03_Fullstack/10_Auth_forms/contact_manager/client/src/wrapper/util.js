// 4. In order to create our high order component, we need to create a function, that will return another component.

// 5. We need to import react and Component from react.
// 6. we need to inport the useNagivate hook from react-router.
// This will give us access to the navigate function and be able 
// to redirect our application.

import React, { Component } from 'react';
import { useNavigate} from 'react-router-dom';

// 7. This is our higher order component to use the useNavigate hook. We pass it through to our component as a prop under the name 'navigate'
export const withNavigation = (Component) => {
  return props => <Component {...props} navigate={useNavigate()} />;
}

//8. Open AddContact.js