// Dependencies
// =============================================================

// Sequelize (uppercase) references the standard npm library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the database
var sequelize = require("../config/connection.js");

// Creates a "User" model that matches up with database
var User = sequelize.define("user", {
  // Primary Key
  id: {
    type: Sequelize.INT,
    primaryKey: true
},
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
}, {
  timestamps: false
});

// Syncs with database
User.sync();

// Makes the Products Model available for other files (will also create a table)
module.exports = User;
