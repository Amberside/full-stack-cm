// File: src/actions/contactActions
// This file holds all our actions for our contacts.
// The has 2 parts
// The action types
// And the action functions
// 3. import types
import {
  GET_CONTACTS,
  GET_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  DEL_ERROR
} from './types';
// 4. import axios
import axios from 'axios';

// 5. create our getContacts function.
// this function will contain our api call, dispatch, action type and a payload

// Get all contacts
export const getContacts = () => async dispatch => {
  // 6. the call to the api.
  // This will get all our contacts from the endpoint
  const res = await axios.get('/api/contacts');
  // 7. Dispatch the action and payload to the reducer to update the state.
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

// Get a contact
export const getContact = (id) => async dispatch => {
  // 8. call to the api.
  // This will get a contact from the api.
  const res = await axios.get(`/api/contact/${id}`);
  // 9. Dispatch the action and payload to the reducer
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

// Add a contact
export const addContact = contact => async dispatch => {
  // 10. call the api.
  // add a new contact in
  const res = await axios.post('/api/contact/add', contact);
  // 11. dispatch the action and data.
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

// Update a contact
export const updateContact = contact => async dispatch => {
  // 12. call the api
  // update a contact
  const res = await axios.put(`/api/contact/edit/${contact.id}`, contact);
  // 13. dispatch the action and payload
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};

// Delete a contact
export const deleteContact = id => async dispatch => {
  // 14. call the api
  try {
    await axios.delete(`/api/contact/${id}`);
    // 15. dispatch the action and payload
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
// 16. Done!
