// file: src/reducers/contactReducer.js
// This file holds all our state and reducers that will deal with our contacts.
// There are 3 parts to this file.
// The actions we can use.
// The state
// and the reducers to create a new state...
// 21. import our types from actions/types.js
import {
  GET_CONTACTS,
  GET_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  DEL_ERROR
} from '../actions/types';

// 22. create our state object.
// We have a contacts array
// a contact object
// and an errors object.
const initialState = {
  contacts: [],
  contact: {},
  loading: true,
  errors: {}
};

// Create our contactReducer to change our state.
// A reducer takes in a state and an action.
// this will update the state based on the action.
// 23. the reducer for our contacts actions and how it will update the state.
export default function contactReducer(state = initialState, action) {
  switch(action.type) {
    // The case for the action GET_CONTACTS
    case GET_CONTACTS: 
      return {
        ...state, 
        contacts: action.payload,
        // return the current state plus the new contacts array.
        loading: false
      }
    // The case for the action GET_CONTACT
    case GET_CONTACT: 
      return {
        ...state, 
        contact: action.payload,
        // return the current state plus the new contact object.
        loading: false
      }
    // The case for the action ADD_CONTACT
    case ADD_CONTACT: 
      return {
        ...state, 
        contacts: [action.payload, ...state.contacts],
        contact: action.payload,
        // return the current state plus the new contacts array.
        // and the new contact object
        loading: false
      }
    // The case for the action UPDATE_CONTACT
    case UPDATE_CONTACT: 
      return {
        ...state, 
        contacts: state.contacts.map(contact => 
          contact.id === action.payload.id 
          ? (contact = action.payload) : contact),
        // Ternary operator to update the contact in our contacts array
        // return the current state plus the new contacts array.
        loading: false
      }
    // The case for the action DELETE_CONTACT
    case DELETE_CONTACT: 
      return {
        ...state, 
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
        loading: false
        // The filter will remove the contact from the contacts array.
        // return the current state plus the new contacts array.
      }
    // The case for the action DEL_ERROR
    case DEL_ERROR: 
      return {
        ...state, 
        errors: action.payload,
        loading: false
        // return the current state plus the errors object.
      };
    default:
      return state
      // by default return the state unchanged.
  } // end of switch
} // end of export

// 24. Now we need to add the store into our app.
// open app.js
// Note: 
// A reducer never changes the orginal/current state
// We make a copy first and then make the changes/