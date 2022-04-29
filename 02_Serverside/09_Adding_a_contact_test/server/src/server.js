
// Bring in express and required modules
const express = require('express');
// Bring in sequlize and our db from the models folder
const db = require('./models');
// bring in our configuration
const config = require('./config/config');


// Initialise express app variable
const app = express();

// 2. Destructure our model from the import to use later
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
  // 3. comment out the res.send.
  // res.send('contact add, post');
  // Note: we can only have one res.send in our callback. res.send will terminate the endpoint, similar in the way a return works in a function.
  // 4. create a dummy contact
  const contact = await Contact.create({
    name: "Lisa Speed",
    email: "speedy@test.com",
    phone: "853-534-535"
  });
  // 5. Log the contact
  console.log(contact.toJSON());
  // 6. return the contact
  res.send(contact)
  // 7. open postman and test the add contact route.
  // The response from the server should be some JSON data.
  // it should include the field above and an id, createdAt and updatedAt as well. Example below:
  // {
  //     "id": 1,
  //     "name": "Lisa Speed",
  //     "email": "speedy@test.com",
  //     "phone": "853-534-535",
  //     "updatedAt": "2022-03-26T03:45:25.608Z",
  //     "createdAt": "2022-03-26T03:45:25.608Z"
  // }
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
app.get('/api/contacts', (req, res) => {
  console.log('/api/contacts - get');
  // return all contacts
  res.send('contacts, get');
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
