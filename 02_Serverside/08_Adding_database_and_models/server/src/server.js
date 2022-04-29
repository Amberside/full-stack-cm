
// Bring in express and required modules
const express = require('express');
// 15. Bring in sequlize and our db from the models folder
// As the file we used in our models folder is index.js, we do not need to include a file name with the folder name, as node will automatically load index.js (like websites automatically loading index.html)

const db = require('./models');
// bring in our configuration
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



// 16. Update our app.listen, so we can sync to our database.
// we use the sync() function. 
// Look at: 
// https://sequelize.org/v6/manual/model-basics.html#model-synchronization 
// for more information
// Be careful with using the sync function, as you may end up deleting all your data in the database.. (you can of course keep backups!)
db.sequelize.sync().then(() => {
  app.listen(config.port, 
    () => console.log(`Server is running on port: ${config.port}`))
});

// If everything works would should see our database file in our server directory. contact_manager.sqlite. (we set this up in our config file.)
// If you want to move your database to a new server, you just need to copy this file.
// If you view the database there are some tools you can use:
// DB Browser (SQLite)
// https://sqlitebrowser.org/
// Or SQLite Studio
// https://sqlitestudio.pl/
// When you are using the viewers you should see the database name, the Contacts table and the fields we defined in our models.
// If you are using MySql, you need your database running before you start your api. You will also need to create the database, so the api can create the table.
// Also make sure the username and password is the same as what you setup up in the database when you installed it.
// MySql defaults are:
// MAC: user: root, password: root
// PC: user: root, password: 
