// File: src/actions/contactActions
// This file holds all our actions for our contacts.
// The has 2 parts
// The action types
// And the action functions
// import types
import {
  GET_CONTACTS,
  GET_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  DEL_ERROR
} from './types';
// import axios
import axios from 'axios';

// create our getContacts function.
// this function will contain our api call, dispatch, action type and a payload

// Get all contacts
export const getContacts = () => async dispatch => {
  console.log('getContacts');
  // the call to the api.
  // This will get all our contacts from the endpoint
  const res = await axios.get('/api/contacts');
  // Dispatch the action and payload to the reducer to update the state.
  console.log(res.data);
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

// Get a contact
export const getContact = (id) => async dispatch => {
  // call to the api.
  // This will get a contact from the api.
  const res = await axios.get(`/api/contact/${id}`);
  // Dispatch the action and payload to the reducer
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

// Add a contact
export const addContact = contact => async dispatch => {
  // call the api.
  // add a new contact in
  const res = await axios.post('/api/contact/add', contact);
  // dispatch the action and data.
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

// Update a contact
// 9. update the axios call to be the following path: /api/contact/edit/${contact.C_id}
export const updateContact = contact => async dispatch => {
  // call the api
  // update a contact
  const res = await axios.put(`/api/contact/edit/${contact.C_id}`, contact);
  // dispatch the action and payload
  console.log(res);
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};
// 10. open src/components/Contacts.js

// Delete a contact
export const deleteContact = id => async dispatch => {
  // call the api
  try {
    await axios.delete(`/api/contact/${id}`);
    // dispatch the action and payload
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: DEL_ERROR,
      payload: error
    });
  };
}

// End of contactActions.js

