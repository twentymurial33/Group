// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Products" model that matches up with DB
var Products = sequelize.define("products", {
  // Primary Key
  product_id: {
      type: DataTypes.INT,
      primaryKey: true
  },
  product_name: {
    type: DataTypes.STRING
  },
  product_description: {
    type: DataTypes.STRING
  },
  img_url: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.DECIMAL
  },
  price_negotiable: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  sold: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: true
});

// Syncs with DB
Products.sync();

// Makes the Products Model available for other files (will also create a table)
module.exports = Products;
