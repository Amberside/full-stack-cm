// src/models.js
// this file will create our database and tables if they do not exist.

// 6. The Sequelize package. 
// This allows us to use sql as functions for a sql database
// We need this package to intialise our database and create the models for our tables.
const {Sequelize, DataTypes} = require('sequelize');
// 7. Bring in our config file.
const config = require('../config/config');

// 8. Create our db variable
let db = {};

// 9. Create a new Sequelize object, and pass in our database details. This will intialise our database with the options we specified in our config.
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

// 10. Setup Contact model for sequelize.
// This is configuring our Contacts table in our database.
// The define function tells sequelize that we are creating a database model.
// sequelize will add an 's' to the model name to create the table in the database
// For more information about models look at:
// https://sequelize.org/v6/manual/model-basics.html
// DataTypes in the model will let the database know what type of data we need for each field in our table.
// For more information about DataTypes look at:
// https://sequelize.org/v6/manual/model-basics.html#data-types
const Contact = sequelize.define('Contact',
    {
      // This is our primary key..
      // we are using autoIncrement, which the database will add to this and we do not need to pass a value for this when we create a new 
      id: 
        {type: DataTypes.INTEGER, 
          autoIncrement: true,
          primaryKey: true
        },
        // our data that we wish to store.
      name: {type: DataTypes.STRING},
      email: {type: DataTypes.STRING},
      phone: {type: DataTypes.STRING}
    }
  );

  console.log(sequelize.models);

// 11. Set up access vars.

db.sequelize = sequelize; // This will allow us to access the sequelize object if we use this module
db.Sequelize = Sequelize; // This will allow us to access the Sequelize class if we use this module

// 13. Export the varibles
module.exports = db;
module.exports.Op = Sequelize.Op; // can be used where the model is available
// 14. open server.js