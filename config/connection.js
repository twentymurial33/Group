// Initiating connection to mySQL

// Dependencies
var Sequelize = require("sequelize");

// Creating mySQL connection using Sequelize
var sequelize = new Sequelize("yard_sale_db", "root", "", {
    host: "localhost",
    port: 3000,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });


// Exporting the connection for other files to use
module.exports = sequelize;
