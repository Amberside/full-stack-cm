// 3. Use rcc to create boilerplate
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleContact extends Component {
  render() 
  {
    //4. use props to display information
    return (
      <div className='card card-body mb-3'>
        <h2>{this.props.contact.name}</h2>
        <ul className='list-group'>
          <li className='list-group-item'>{this.props.contact.email}</li>
          <li className='list-group-item'>{this.props.contact.phone}</li>
        </ul>
      </div>
    )
  }
}

// 5. PropType Data checking!
SingleContact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phont: PropTypes.string
}
// 6. open Contacts.js

export default SingleContact;