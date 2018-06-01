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
      type: Sequelize.INT,
      primaryKey: true
  },
  // Foreign Key
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      // This is a reference to another model
      model: User,
      // This is the column name of the referenced model
      key: 'id',
    }
  },
  product_name: {
    type: Sequelize.STRING
  },
  product_description: {
    type: Sequelize.STRING
  },
  img_url: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.DECIMAL
  },
  price_negotiable: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  sold: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: true
});

// Syncs with DB
Products.sync();

// Makes the Products Model available for other files (will also create a table)
module.exports = Products;
