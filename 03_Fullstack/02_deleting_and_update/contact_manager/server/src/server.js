
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
  // To get a single contact we can use one of two options, findOne or findByPk.
  // if we know the id we can use findByPk.
  // 7. get the id from the url
  let id = req.params.id;
  // 8. as the id is stored in our database as an integer, make sure our id is an int, we will use parseInt
  id = parseInt(id);
  // 9. check the id that was passed through:
  console.log(id);
  // 10. Find our contact
  const contact = await Contact.findByPk(id);
  // 11. check our contact
  console.log(contact);
  // 12. return the contact to the client
  res.send(contact);
  // 13. Test in postman that you can get a contact.
});
// 14. goto the edit route

// Edit contact/ update contact
// /api/contact/edit/:id 
// Post request
app.put('/api/contact/edit/:id', async(req, res) => {
  console.log('/api/contact/edit/:id - post');
  // update a contact
  // 15. get the id from the url
  let id = req.params.id;
  // 16. as the id is stored in our database as an integer, make sure our id is an int, we will use parseInt
  id = parseInt(id);
  // 17. check the id that was passed through:
  console.log(id);
  // To edit a contact we would use the update() function.
  // the update takes in what fields are being changed, then what the options for the update are.
  // create the data to be sent:
  const { name, email, phone} = req.body;
  // 18. create our update
  const contact = await Contact.update({ name, email, phone}, {
    where: { id: id}
  });
  // 19. check our contact
  console.log(contact)
  // 20. send the data to the client
  res.send(contact)
  // 21. test in postman
  // 22. open client/src/components/SingleContact
});

// Get all contacts
// /api/contacts
// Get request
app.get('/api/contacts', async(req, res) => {
  console.log('/api/contacts - get');
  // return all contacts
  // We need to query our database to get our data.
  // We do this by using the findAll() function, to get all the contacts in the contacts table.
  // remember if we use await, we need an async before (req, res)
  const list = await Contact.findAll();
  // send the list to the client.
  res.send(list);
});

// delete a contact
// /api/contact/:id 
// Get request
app.delete('/api/contact/:id', (req, res) => {
  console.log('/api/contact/:id - delete');
  // to delete a contact we first need to know which contact we are deleting. we can use req.params.id to find out.
  // 1. get the id from the url.
  let id = req.params.id;
  // 2. as the id is stored in our database as an integer, make sure our id is an int, we will use parseInt
  id = parseInt(id);
  // 3. check the id that was passed through:
  console.log(id);
  // in order to delete a contact in the database we use the destroy() function, we also need a where clause so we can pass through the contact we are deleting..
  // 4. The destroy function
  Contact.destroy({
    where: {id: id }
  });
  res.send(`Id: ${id} deleted`);
  // 5. run the server and test in postman
  // 6. goto the get single contact route.
});



// sync to our database.

db.sequelize.sync().then(() => {
  app.listen(config.port, 
    () => console.log(`Server is running on port: ${config.port}`))
});
