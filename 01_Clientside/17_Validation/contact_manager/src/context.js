// import react and Component from react
import React, { Component } from 'react';
// We use the axios command to send requests to an API
import axios from 'axios';

// This is to setup up our context to store our state.
const Context = React.createContext();

// This is our reducer, which updates our state.
// Reducers take two arguements, the state and the action.
const reducer = (state, action) => {
  switch(action.type){
    // case to delete a contact
    // notice the code here is similar to our event functions
    case "DELETE_CONTACT":
      return{
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
      // Case to add a new contact
    case "ADD_CONTACT":
      return{
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
      // case to update a contact
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(
          contact => contact.id === action.payload.id ? 
          (contact = action.payload) : contact)
      };
    default:
      return state;
  }
}

// The provider class is a wrapper which holds the state for our application.

export class Provider extends Component {

  // 12. componentDidMount is a lifecycle method. This code will execute after the component has mounted.
  // All data in React is handled with async functions.
  async componentDidMount(){
    // 13. use axios.get to an API endpoint to get data from an API. 
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(res.data);
    // 14. Set the state from our response from the API
    this.setState({ contacts: res.data})
  };
  // End of componentDidMount()

  // Set up the state for our Provider:
  state = {
    // Setup contacts: to be an empty array.
    contacts: [],
    // Dispatch is used to send actions to the reducer.
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  // End of State.

  // The render and return for the Provider component.
  render(){
    return(
      // The Provider value is what makes the state available to all components.
      <Context.Provider value={this.state}>
        {/* This allows the state to be accessed by components children. */}
        {this.props.children}
      </Context.Provider>
    )
  }
} // End of provider

// All contexts can be consumed.
// This allows components to be subscribed to state changes.
export const Consumer = Context.Consumer;
