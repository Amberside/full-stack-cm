
// Bring in express and required modules
const express = require('express');

// Initialise express app variable
const app = express();

// Initialise middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// test route
app.get('/test', (req, res) => {
  // Log path and request
  console.log('/test - test');
  res.send('Am I a server, and I am up!');
})

// Routes can be get, post, put or delete
app.get('/', (req, res) => {
  // log the path and request
  console.log('/ - get');
  res.send('Home page');
});

// 2. Create routes
app.post('/contact/add', (req, res) => {
  console.log('/contact/add - post');
  // add a new contact
  res.send('contact add, post');
});
app.get('/contact/edit/:id', (req, res) => {
  console.log('/contact/edit/:id - get');
  // get a contact
  res.send('contact edit id, get');
});
app.post('/contact/edit/:id', (req, res) => {
  console.log('/contact/edit/:id - post');
  // update a contact
  res.send('contact edit id, post');
});
app.get('/contacts', (req, res) => {
  console.log('/contacts - get');
  // return all contacts
  res.send('contacts, get');
});
// 3. we can test these routes in postman.
// 4. done

// Create our port variable
const PORT = process.env.PORT || 5000;


app.listen(PORT, 
  ()=> console.log(`Server is running on port: ${PORT}`)
);
