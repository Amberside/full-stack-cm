
// Bring in express and required modules
const express = require('express');
// Bring in sequlize and our db from the models folder
const db = require('./models');
// bring in our configuration
const config = require('./config/config');

// Initialise express app variable
const app = express();

// Destructure our model from the db import to use later
const { Contact } = db.sequelize.models;

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
  // 19. We can get the data passed through from the client using req.body.
  console.log(req.body);
  // from the log we should see the name, email and phone from the client.
  // 20. we can destucture the variable in req.body
  const { name, email, phone } = req.body;
  // 21. create the contact 
  const contact = await Contact.create({
    name,
    email,
    phone
  });
  // 22. Log the contact
  console.log(contact.toJSON());
  // 23 return the contact
  res.send(contact)
  // 24. test and done!
});

// Get a contact
// /api/contact/:id 
// Get request
app.get('/api/contact/:id', (req, res) => {
  console.log('/api/contact/edit/:id - get');
  // get a contact
  
  res.send('contact edit id, get');
});

// Edit contact/ update contact
// /api/contact/edit/:id 
// Post request
app.post('/api/contact/edit/:id', (req, res) => {
  console.log('/api/contact/edit/:id - post');
  // update a contact
  res.send('contact edit id, post');
});

// Get all contacts
// /api/contacts
// Get request
app.get('/api/contacts', async(req, res) => {
  console.log('/api/contacts - get');
  // return all contacts
  // 9. comment out the res.send
  // res.send('contacts, get');
  // 10. We need to query our database to get our data.
  // We do this by using the findAll() function, to get all the contacts in the contacts table.
  // remember if we use await, we need an async before (req, res)
  const list = await Contact.findAll();
  // 11. test the result
  // console.log(list);
  // 12. send the list to the client.
  res.send(list);
  // 13. Run your server and test the route in postman.
  // 14. if everything is working, comment out the console.log statement 
  // 15. run your client server (in the client directory run npm start). our new contact list should now be showing.
  // Remember: for data to show in our react app, the server MUST be running. (otherwise you will get an ECCON error and a proxy error)
  // 16. open client/src/components/contacts/AddContact.js
});

// delete a contact
// /api/contact/:id 
// Get request
app.delete('/api/contact/:id', (req, res) => {
  console.log('/api/contact/:id - delete');
  // get a contact
  res.send('contact id, delete');
});



// sync to our database.

db.sequelize.sync().then(() => {
  app.listen(config.port, 
    () => console.log(`Server is running on port: ${config.port}`))
});
