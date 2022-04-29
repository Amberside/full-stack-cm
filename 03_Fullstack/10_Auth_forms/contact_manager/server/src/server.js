// 2. Use ctrl-f or cmd-f to search for
// our where clauses in our contact routes
// Search for where {id: id}
// This code needs to change to 
// where { C_id: id}
// There are 2 routes to look at:
//  put route: /api/contact/edit/:id
//  delete route: /api/contact/:id

// Bring in express and required modules
const express = require('express');
// Bring in sequlize and our db from the models folder
const db = require('./models');
// bring in our configuration
const config = require('./config/config');
// Bring in Bcrypt
const bcrypt = require('bcrypt');
// Bring in jsonwebtoken
const jwt = require('jsonwebtoken');

// Initialise express app variable
const app = express();

// Destructure our models from the db import to use later
const { Contact, User } = db.sequelize.models;

// Initialise middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// test route
app.get('/api/test', (req, res) => {
  // Log path and request
  console.log('/api/test - test');
  res.send('Am I a server, and I am up!');
})

// Routes can be get, post, put or delete
app.get('/', (req, res) => {
  // log the path and request
  console.log('/ - get');
  res.send('Home page');
});

// Server routes
// Add a new contact
// /contact/add 
// Post request
app.post('/api/contact/add', async(req, res) => {
  console.log('/api/contact/add - post');
  // add a new contact
  // we can destucture the variables in req.body
  const { name, email, phone } = req.body;
  // create the contact 
  const contact = await Contact.create({
    name,
    email,
    phone
  });
  
  console.log(contact.toJSON());
  res.send(contact)
  
});

// Get a contact
// /api/contact/:id 
// Get request
app.get('/api/contact/:id', async(req, res) => {
  console.log('/api/contact/edit/:id - get');
  // get a contact
  let id = req.params.id;
  id = parseInt(id);
  console.log(id);

  const contact = await Contact.findByPk(id);
  console.log(contact);
  res.send(contact);
});

// Edit contact/ update contact
// /api/contact/edit/:id 
// Post request
app.put('/api/contact/edit/:id', async(req, res) => {
  console.log('/api/contact/edit/:id - post');
  // update a contact
  let id = req.params.id;
  console.log(id);
  id = parseInt(id);
  // check the id that was passed through:
  console.log(id);
  // To edit a contact we would use the update() function.
  console.log(req.body);
  const { name, email, phone} = req.body;
  // create our update
  const contact = await Contact.update({ name, email, phone}, {
    // 3. Change to where: { C_id: id}
    where: { C_id: id}
  });
  // check our contact
  console.log(contact)
  // send the data to the client
  res.send(contact)
});

// Get all contacts
// /api/contacts
// Get request
app.get('/api/contacts', async(req, res) => {
  console.log('/api/contacts - get');
  // return all contacts
  // We need to query our database to get our data.
  const list = await Contact.findAll();
  // send the list to the client.
  res.send(list);
});

// delete a contact
// /api/contact/:id 
// Get request
app.delete('/api/contact/:id', (req, res) => {
  console.log('/api/contact/:id - delete');
  // req.params.id to find out.
  let id = req.params.id;
  id = parseInt(id);

  console.log(id);
  // Delete our entry
  Contact.destroy({
    // 4. Change to where: { C_id: id}
    where: {C_id: id }
  });
  res.send(`Id: ${id} deleted`);
});
// 5. open clientside src/reducers/contactReducer.js

// Auth routes
// Login route
app.post('/api/auth', async(req,res) => {
  const { email, password } = req.body;
    
    try{
      // see if the user exists
      let user = await User.findOne({ where: {email: email } });
      // Send message if the user does not exist
      if (!user){
        return res.status(400).json({ errors: [ { msg: 'Invalid Credentials' }]});
      }
      // Check to see if the entered password is equal to the email stored in the database.
      // We do this by using the compare function.
      const isMatch = await bcrypt.compare(password, user.password);
      // Send a message back if the password is incorrect
      if(!isMatch){
        return res.status(400).json({ errors: [ { msg: 'Invalid Credentials' }]});
      }
      
      // We can use the payload to customise what information we want to save to the token.
      // jwt.sign(payload, key, [options, callback]) 
      // Create the payload
      const payload = {
        user: {
          U_id: userRes.U_id,
          name: userRes.name,
          email: userRes.email,
          isAdmin: userRes.isAdmin
        }
      };

      // Sign the token.
      jwt.sign(payload, config.authentication.jwtSecret, 
        {expiresIn: "7d"}, 
        (err, token) => {
          if(err) throw err;
          res.json({ token });
        });

      // Send the user back to the client
    }catch(err){
      // send an error message if the try block fails.
      console.error(err.message);
      res.status(500).send('Server error')
    } // end catch
});

// Register a new user
// @route   POST api/users/news
// @desc    Register user
// @access  Public
app.post('/api/users/new', async (req, res) => {
  // destructure our req.body
    const { name, email, password } = req.body;
    
    try{
      // see if the user exists
      let user = await User.findOne({ where: {email: email } });
      // send a message if the user is already registered
      if (user){
        return res.status(400).json({ errors: [ { msg: 'User already exists' }]});
      }
      // create our new user
      const newUser = {
        name,
        email,
        password
      };

      // Encrypt the password
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);
      
      console.log(newUser);


      // save to the database.
      const userRes = await User.create({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        isAdmin: false
      });

      // after matching create a token to send to the client.
      // jwt.sign(payload, key, [options, callback]) 
      // Create the payload
      const payload = {
        user: {
          U_id: userRes.U_id,
          name: userRes.name,
          email: userRes.email,
          isAdmin: userRes.isAdmin
        }
      };

      // sign the token.
      jwt.sign(payload, config.authentication.jwtSecret, 
        {expiresIn: "7d"}, 
        (err, token) => {
          if(err) throw err;
          res.json({ token });
        });
      // Send our user back to the client
      // res.send(userRes);
      
    }catch(err){
      // Send an error message if the try block fails
      console.error(err.message);
      res.status(500).send('Server error')
    } // end catch
  } // end of async (req, res)
); // End of register user with POST

// sync to our database.
db.sequelize.sync().then(() => {
  app.listen(config.port, 
    () => console.log(`Server is running on port: ${config.port}`))
});
