// File: src/reducers/rootReducer.js
// The rootReducer is where we combine all our reducers together.
// we do this by using the combineReducers function from redux.
// 17. import combineReducers from redux
import { combineReducers } from "redux";
// 18. import our contactReducer
import contactReducer from './contactReducer';
// 19. use the combineReducers to export a single reducer to our store.
// the format here is <state_name>: <reducer_to_handle_that_state>
export default combineReducers({
  contact: contactReducer
});
// 20. open contactReducer.js


