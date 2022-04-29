// Store.js
// This file allows us to create a store to hold state for our application
// It also allows us to add in any middleware we need as well.
// 5. we need to bring in createStore and applyMiddleware
import { createStore, applyMiddleware } from "redux";
// This will allow us to create our store, and in any middleware we need to use.
// 6. This will help us connect our state to our dev tools in the browser
import { composeWithDevTools } from "@redux-devtools/extension";
// 7. Bring in our middleware that helps us with async actions
import thunk from 'redux-thunk';
// 8. import our root reducer
import rootReducer from './reducers/rootReducer';

// 9. Create the initialState - empty object
const initialState = {};
// 10. Create an array to hold our middleware.
const middleware = [thunk];

// 11. This will create our store to hold our state...
// The createStore function takes 3 arguments.
// A reducer, the state and any enhancers.
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
// Note: If we do not want to allow the dev tools in production, we can use composeWithDevToolsDevelopmentOnly instead of composeWithDevTools
// 12. create types.js in our action folder.
// 13. open types.js