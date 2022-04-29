
import React, { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

// Changing to an arrow based functional component
const EditContact = (props) =>  {

  // set our state for the form
  const [formData, setFromData] = useState({
    id: '',
    name: '',
    email: '',
    phone: ''
  });

  // Check our props
  // console.log(props);
  const id = useParams();
  const {getContact} = props;
  // console.log(id);
  const navigate = useNavigate();
 
  // We need to use the useEffect hook to set our state.
  useEffect( () => {
    // console.log(id)
    const contact = getContact(id);
    console.log(contact);
    // Use the setFormData to set our state:
    setFromData({
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
    // The array here holds dependences. These are what triggers any updates or refreshes to the component.
  }, [id, getContact]);

  // 10. Destructure the formData from state.
  const { name, email, phone } = formData;

  // the onchange function.
  const onChange = e => setFromData(
    {...formData, [e.target.name]: e.target.value}
  );
  
  

// onSubmit;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('OnSubmit Edit running..');
    console.log(`${id} ${name} ${phone} ${email}`)
    // create a update contact object.
    const updContact = {
      id,
      name,
      email,
      phone
    }

    // Check for errors.
    // Send the newContact to an API or to state management
    console.log(updContact);
    // Call our handleUpdate function
    props.handleUpdate(id, updContact);
    // We can do other things after we send off our newContact
    // Redirect the broswer back to the home page ('/')
    navigate('/', { replace: true });
  }

  return (
    <Fragment>
      <h1 className='text-primary'>Edit Contact</h1>
      <div className='card mb-3'>
        <div className='card-header'>
          Add Contact
        </div>
        <div className='card-body'>
          <form onSubmit={e => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='name'>Name</label>
              <input 
                type='text'
                className='form-control'
                id='name'
                placeholder='Name'
                name='name'
                value={name} 
                onChange = {(e) => onChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email'>Email</label>
              <input 
                type="text"
                className='form-control'
                id='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange = {(e) => onChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='phone'>Phone</label>
              <input 
                type="text"
                className='form-control'
                id='phone'
                placeholder='Phone'
                name='phone'
                value={phone}
                onChange = {(e) => onChange(e)}
              />
            </div>
            <div className='d-grid gap-2'>
              <input type='submit' value='Update Contact' className='btn btn-light '/>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default EditContact;