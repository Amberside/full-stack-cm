
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Bring in the icons we wish to use
import { FaSortDown, FaTimes, FaPencilAlt } from 'react-icons/fa';
// 15. bring in the consumer
import { Consumer } from '../../context';
// 16. bring in axios
import axios from 'axios';

class SingleContact extends Component {
  // Add in state to keep track of our contact info.
  state = {
    showContactInfo: false
  }

  // in this case the e is the event information that has been passed by default.
  onShowClick = e => {
    console.log('onShowClick called');
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }
    // 17. New delClick function. (remove the old function)
  delClick = async(id, dispatch ) => {
    console.log("delete: " + id);
    // Add in code if you want to delete the contact
    alert('Are you sure?');
    // If they are sure we can now dispatch our action to the reducer and send the request to the API
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: 'DELETE_CONTACT', payload: id});

  }
  
  render(){
  // 18. Destucturing the props.
  const { name, email, phone, id } = this.props.contact;
  // 19. Destuctruting state
  const { showContactInfo } = this.state;
    return (
      // 20. Wrap our component in the Consumer
      <Consumer>
        {/* 21. add in the value */}
        {
          value => {
            // This will pull out the dispatch function in our context state.
            const { dispatch } = value;
            return (
              <div className='card card-body mb-3'>
                <h2>
                  {name}
                  {' '}
                  <FaSortDown onClick={this.onShowClick} style={{ cursor: 'pointer'}}/>
                  <FaTimes onClick={this.delClick.bind(this, id, dispatch)} style={{ cursor: 'pointer', float: 'right', color: 'red', marginLeft: '10px'  }}/>
                  <Link to={`/edit/${this.props.contact.id}`}>
                    <FaPencilAlt className='text-primary' style={{ cursor: 'pointer', float: 'right'  }}/>
                  </Link>
                </h2>
                { showContactInfo ? (
                  <ul className='list-group'>
                    <li className='list-group-item'>{email}</li>
                    <li className='list-group-item'>{phone}</li>
                  </ul>
                  ) : null 
                }   
              </div>
            ) // End of inner return
          } 
        } 
        {/* end of value */}
        </Consumer>
      ) // End of outer return
  } // End of render
} // End of SingleContact Component


// PropType Data checking!
SingleContact.propTypes = {
  contact: PropTypes.object
}
// 22. open AddContact;

export default SingleContact;