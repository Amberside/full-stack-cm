// 17. use rafcp. We will also need useState hook
import React, {useState } from 'react';
import PropTypes from 'prop-types';
// 18. import connect
import { connect } from 'react-redux';
// 19. import Link and icons
import { Link } from 'react-router-dom';
// Bring in the icons we wish to use
import { FaSortDown, FaTimes, FaPencilAlt } from 'react-icons/fa';
// 20. Bring in our delete function
import {deleteContact} from '../../actions/contactActions';

// 21. Destructure our props
const SingleContact = ({contact, deleteContact}) => {
  // 22. Set up the state for this component
  const [showContactInfo, setShowContactInfo] = useState(false);

  // 23. copy onshowClick from .bak version, with changes.
  // We are no longer using this.setState.
  const onShowClick = e => {
    console.log('onShowClick called');
    setShowContactInfo( !showContactInfo );
  }

  // 24. copy the return from the .bak version.
  return (
    <div className='card card-body mb-3'>
      <h2>
        {contact.name}
        {' '}
        <FaSortDown onClick={e => onShowClick(e)} style={{ cursor: 'pointer'}}/>
        {/* 25. Change onClick for delete */}
        <FaTimes onClick={e => deleteContact(contact.id)} style={{ cursor: 'pointer', float: 'right', color: 'red', marginLeft: '10px'  }}/>
        {/* 26. Change the link */}
        <Link to={`/edit/${contact.id}`}>
          <FaPencilAlt className='text-primary' style={{ cursor: 'pointer', float: 'right'  }}/>
        </Link>
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

// 27. set propTypes
SingleContact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
}

// 28. use connect
export default connect(null, {deleteContact})(SingleContact)
// 29. test app.
// 30. open AddContact.js