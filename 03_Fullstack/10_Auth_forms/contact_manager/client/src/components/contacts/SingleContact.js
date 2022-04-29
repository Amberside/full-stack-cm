// use rafcp. We will also need useState hook
import React, {useState } from 'react';
import PropTypes from 'prop-types';
// import connect
import { connect } from 'react-redux';
// import Link and icons
import { Link } from 'react-router-dom';
// Bring in the icons we wish to use
import { FaSortDown, FaTimes, FaPencilAlt } from 'react-icons/fa';
// Bring in our delete function
import {deleteContact} from '../../actions/contactActions';

// Destructure our props
const SingleContact = ({contact, deleteContact}) => {
  // Set up the state for this component
  const [showContactInfo, setShowContactInfo] = useState(false);

  // copy onshowClick from .bak version, with changes.
  // We are no longer using this.setState.
  const onShowClick = e => {
    console.log('onShowClick called');
    setShowContactInfo( !showContactInfo );
  }

  // copy the return from the .bak version.
  // 13. In our return we need to change the onClick for our delete button and change the path in the Link.
  //
  return (
    <div className='card card-body mb-3'>
      <h2>
        {contact.name}
        {' '}
        <FaSortDown onClick={e => onShowClick(e)} style={{ cursor: 'pointer'}}/>
        {/* 14. Change onClick for delete 
          contact.id to contact.C_id
        */}
        <FaTimes onClick={e => deleteContact(contact.C_id)} style={{ cursor: 'pointer', float: 'right', color: 'red', marginLeft: '10px'  }}/>
        {/* 15. Change the link 
          change contact.id to contact.C_id
        */}
        <Link to={`/edit/${contact.C_id}`}>
          <FaPencilAlt className='text-primary' style={{ cursor: 'pointer', float: 'right'  }}/>
        </Link>
        {/* 16. open EditContact.js */}
      </h2>
      { showContactInfo ? (
        <ul className='list-group'>
          <li className='list-group-item'>{contact.email}</li>
          <li className='list-group-item'>{contact.phone}</li>
        </ul>
        ) : null 
      }   
    </div>
  )
}

// set propTypes
SingleContact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
}

// use connect
export default connect(null, {deleteContact})(SingleContact)
