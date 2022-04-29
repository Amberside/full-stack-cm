
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 17. Bring in the Link component
import { Link } from 'react-router-dom';
// Bring in the icons we wish to use
import { FaSortDown, FaTimes, FaPencilAlt } from 'react-icons/fa';

class SingleContact extends Component {
  // Add in state to keep track of our contact info.
  state = {
    showContactInfo: false
  }

  // in this case the e is the event information that has been passed by default.
  onShowClick = e => {
    // console.log(e)
    // console.log('onShowClick called');
    // Toggle the state.
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }
    
    onDeleteClick = (id) => {
      // console.log('Delete Clicked')
      // console.log('This is: ', this);
      // console.log(`ID clicked: ${id}`);
      // Call the passed in function
      this.props.handleDelete(id);
    }
  
  render() 
  // We can use destructuring to tidy up our code.
  // This is one way we can optimise our code.
  // const { id, name, email, phone} = this.props.contact
  // We can then use these variables in our component below.
  {
    return (
      <div className='card card-body mb-3'>
        <h2>
          {this.props.contact.name}
          {' '}
          {/* format is onClick = {function name} */}
          <FaSortDown onClick={this.onShowClick} style={{ cursor: 'pointer'}}/>
          <FaTimes onClick={this.onDeleteClick.bind(this, this.props.contact.id)} style={{ cursor: 'pointer', float: 'right', color: 'red', marginLeft: '10px'  }}/>
          {/* 18. Place our pencil icon in a link  */}
          {/* 19. Open App.js */}
          <Link to={`/edit/${this.props.contact.id}`}>
            <FaPencilAlt className='text-primary' style={{ cursor: 'pointer', float: 'right'  }}/>
          </Link>
        </h2>
        {/* In React we can use a ternary operator to do conditional rendering of components.
        ternay operator takes three operands, the condition, what to do when true, what to do when false */}
        {/* For more information:
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
        https://reactjs.org/docs/conditional-rendering.html
         */}
        {/* condition ? true : false */}
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


// PropType Data checking!
SingleContact.propTypes = {
  contact: PropTypes.object
}
// open Contacts.js

export default SingleContact;