
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 9. Bring in the icons we wish to use
import { FaSortDown, FaTimes, FaPencilAlt } from 'react-icons/fa';

class SingleContact extends Component {
  render() 
  {
    return (
      <div className='card card-body mb-3'>
        <h2>
          {this.props.contact.name}
          {/* Putting quotes in braces {} like this allows us to ad space */}
          {' '}
          {/* 10. Use the sort down icon FaSortDown */}
          {/* 11. Add some inline styles to the icon */}
          {/* Note that the style attribute has a double brace {{}} */}
          <FaSortDown style={{ cursor: 'pointer'}}/>
          {/* 12. Use the times icon FaTimes */}
          {/* 13. Add some inline styles to the icon */}
          <FaTimes style={{ cursor: 'pointer', float: 'right', color: 'red', marginLeft: '10px'  }}/>
          {/* 14. Use the pencil icon FaPencilAlt */}
          {/* 15. Add some inline styles to the icon */}
          <FaPencilAlt className='text-primary' style={{ cursor: 'pointer', float: 'right'  }}/>
        </h2>
        <ul className='list-group'>
          <li className='list-group-item'>{this.props.contact.email}</li>
          <li className='list-group-item'>{this.props.contact.phone}</li>
        </ul>
      </div>
    )
  }
}
// 16. Test and Done

// PropType Data checking!
SingleContact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phont: PropTypes.string
}
// open Contacts.js

export default SingleContact;