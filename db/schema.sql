CREATE DATABASE yard_sale_db;
USE yard_sale_db;

CREATE TABLE users (
id int NOT NULL AUTO_INCREMENT,
	first_name VARCHAR (100) NOT NULL,
  last_name VARCHAR (100) NOT NULL,
	email VARCHAR (100),
	PRIMARY KEY (id)
);

CREATE TABLE products (
product_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  product_name VARCHAR (200) NOT NULL,
  product_description VARCHAR (1000) NOT NULL,
  img_url VARCHAR (200),
  price DECIMAL(10,2) NULL,
  price_negotiable BOOLEAN NOT NULL default 0,
  sold BOOLEAN NOT NULL default 0,
PRIMARY KEY (product_id)
);
 
