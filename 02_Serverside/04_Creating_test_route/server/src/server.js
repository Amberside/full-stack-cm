
// Bring in express and required modules
const express = require('express');
const res = require('express/lib/response');

// Initialise express app variable
const app = express();

// 2. Create a test route
app.get('/test', (req, res) => {
  // 3. Log path and request
  console.log('/test - test');
  // 4. return a message
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
