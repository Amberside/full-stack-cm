
// Bring in express and required modules
const express = require('express');

// Initialise express app variable
const app = express();

// 2. Initialise middleware
// This sets our server up to handle and use JSON data
// This middleware allows the server to parse incoming requests with json data
app.use(express.json())
// This middleware allows the server to parse incoming requests with url-encoded data
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


// Create our port variable
const PORT = process.env.PORT || 5000;


app.listen(PORT, 
  ()=> console.log(`Server is running on port: ${PORT}`)
);
