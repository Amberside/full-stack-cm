
// Bring in express and required modules
const express = require('express');
const res = require('express/lib/response');

// Initialise express app variable
const app = express();

// Routes can be get, post, put or delete
// 2. Create a route to handle '/'
app.get('/', (req, res) => {
  // 3. log the path and request
  console.log('/ - get');
  // 4. use res.send to send a response
  res.send('Home page');
});
// 5. test in Postman or browser

// Create our port variable
const PORT = process.env.PORT || 5000;


app.listen(PORT, 
  ()=> console.log(`Server is running on port: ${PORT}`)
);
