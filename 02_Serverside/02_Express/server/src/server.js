// 7. Bring in express
// Bring in express and required modules
const express = require('express');

// 8. Initialise express app variable
const app = express();

// 9. Create our port variable
const PORT = process.env.PORT || 5000;
// This code will check if there is a PORT defined in the enviromental variables, otherwise it will use port 5000;

// 10. Listen to the port for requests
app.listen(PORT, 
  ()=> console.log(`Server is running on port: ${PORT}`)
);
// 11. Test by running node src/server.js