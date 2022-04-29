// Use rafcp to create a new bolierplate
import React, { useEffect } from 'react';
// Proptypes is used heavily within redux.
import PropTypes from 'prop-types';
// We also need to connect from react-redux
// This is the glue that "connects" the react component to our store that holds our state.
// import connect
// shortcut: redux tab
import { connect } from 'react-redux';
// Import our SingleContact.js
import SingleContact from './SingleContact';
// import our getContacts action from our action file
import { getContacts } from '../../actions/contactActions';

// we can copy our return code from our .bak version of Contacts.js
// we can also destructure our props here too.
const Contacts = ({getContacts, loading, contacts}) => {
  // create a useEffect hook to use our getContacts function.
  useEffect(() => {
    getContacts();
  }, [getContacts]);

  // open SingleContact.js
  return loading ? (
    <h1> loading....</h1>
    ) : (<div className='mt-3'>
      <h1 className='text-primary'>Contact List</h1>
      {/* 11. Change the key to be contact.C_id */}
      { contacts.map(contact => (
        <SingleContact key={contact.C_id} contact={contact}/>
      ))}
    </div>
  ) // 12. open src/components/SingleContact.js
}
// We can define props that our component will get.
// Anything passed from the store / state will be passed to the component as props. That's where propTypes come in handy.
Contacts.propTypes = {
  // We can use ptfr shortcut to add in the code.
  getContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired
}

// Define mapStateToProps.
// This will take in our state from the store and map that to the props for this component.
const mapStateToProps = state => ({
  contacts: state.contact.contacts,
  loading: state.contact.loading
});
// state.contact.contacts explained:
// state = state
// contact = what it is called in the root reducer
// contacts = what our array is called in our contactReducer.

// The export will need to wrapped with a connect function.
// The format is connect((null or mapStateToProps), {any actions/functions})(ComponentName)
export default connect(mapStateToProps, {getContacts})(Contacts);