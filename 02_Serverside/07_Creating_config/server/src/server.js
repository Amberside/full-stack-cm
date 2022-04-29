
// Bring in express and required modules
const express = require('express');
// 16. bring in our configuration
const config = require('./config/config');

// Initialise express app variable
const app = express();

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
app.post('/api/contact/add', (req, res) => {
  console.log('/api/contact/add - post');
  // add a new contact
  res.send('contact add, post');
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

// 17. We no longer need to use this PORT variable as it is now in our config.

// 18. Update our app.listen to use our config.
app.listen(config.port, 
  ()=> console.log(`Server is running on port: ${config.port}`)
);

// 19. now we will create our scripts and install a package to help with server development.
// in your server directory in the terminal install nodemon.
// https://www.npmjs.com/package/nodemon
// npm i -D nodemon
// This will install nodemon as a development dependency.
// nodemon will automatically restart our server running whenever we make changes. Running node server.js does not update when we make changes to the code.
// 20. Open package.json and add the scripts in the scripts section.
// The scripts we are going to use are:
// start: uses node to start our server, this would be done in production
// server: uses nodemon to start our server
// client: this will start our react server (provided we setup our application in the correct folders.)