
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Bring in the icons we wish to use
import { FaSortDown, FaTimes, FaPencilAlt } from 'react-icons/fa';

class SingleContact extends Component {
  // 2. Add in state to keep track of our contact info.
  state = {
    showContactInfo: true
  }

  // 4. Add in the onShowClick function.
  // in this case the e is the event information that has been passed by default.
  onShowClick = e => {
    // 5. Log the event information
    console.log(e)
    // 6. Test that the function is being called
    console.log('onShowClick called');
    // To change state we need to use the setState function. the format is setState( {key: value})
    // The this keyword tells React we are using the state object in this Component.
    // 7. Toggle the state.
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }
    // 11. Define the onDeleteClick function
    onDeleteClick = (id) => {
      // 12. Testing that the function is called.
      console.log('Delete Clicked')
      // 13. Show the current object details
      console.log('This is: ', this);
      // 14. Show the id clicked.
      console.log(`ID clicked: ${id}`);
      // This doesn't delete anything as the state that holds the contact information is in a different component. We need to look at doing something else to fix this.
      // 15. open Contacts.js
      // 21. Call the passed in function
      this.props.handleDelete(id);
    }
    // 22. open AddContact.js
  
  render() 
  // 12. We can use destructuring to tidy up our code.
  // This is one way we can optimise our code.
  // const { id, name, email, phone} = this.props.contact
  // We can then use these variables in our component below.
  {
    return (
      <div className='card card-body mb-3'>
        <h2>
          {this.props.contact.name}
          {' '}
          {/* 
          To add in an event we need to add in one of the following attributes: onClick, onChage, onSubmit 
          For more information on events check: 
          https://reactjs.org/docs/handling-events.html
          */}
          {/* 3. Add in the onClick attribute. */}
          {/* format is onClick = {function name} */}
          {/* 
          The function may need use the bind keyword. 
          As we are using a arrow function above this will be bound within the onShowClick function and there is no need to bind this to it.
          */}
          <FaSortDown onClick={this.onShowClick} style={{ cursor: 'pointer'}}/>
          {/* 10. Add in the onClick for the time icon */}
          {/* If we do not bind this function, it will be called as soon as the component is loaded. We need to bind it to a specific list item */}
          <FaTimes onClick={this.onDeleteClick.bind(this, this.props.contact.id)} style={{ cursor: 'pointer', float: 'right', color: 'red', marginLeft: '10px'  }}/>
          <FaPencilAlt className='text-primary' style={{ cursor: 'pointer', float: 'right'  }}/>
        </h2>
        {/* In React we can use a ternary operator to do conditional rendering of components.
        ternay operator takes three operands, the condition, what to do when true, what to do when false */}
        {/* For more information:
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
        https://reactjs.org/docs/conditional-rendering.html
         */}
        {/* condition ? true : false */}
        {/* 8. add in condition */}
        { this.state.showContactInfo ?
          (
            <ul className='list-group'>
              <li className='list-group-item'>{this.props.contact.email}</li>
              <li className='list-group-item'>{this.props.contact.phone}</li>
            </ul>
          ) : null 
        }
      </div>
    )
  }
}
// 9. Test showContactInfo


// PropType Data checking!
SingleContact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phont: PropTypes.string
}
// open Contacts.js

export default SingleContact;