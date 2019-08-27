DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

select * from products;

CREATE TABLE products (
 id INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR (49) NULL,
 department_name VARCHAR (49) NULL,
 price DECIMAL (3) NULL,
 stock_quantity INT (3) NULL,
 PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Clothing", 12.99, 150), ("PS4", "Electronics", 399.95, 9), 
("DrPepper", "Grocery", 0.50, 25), ("NyQuil", "Pharmacy", 8.99, 10), 
("Toaster", "KitchenAppliances", 19.99, 6),
("TV", "Electronics", 599.95, 5), ("Leggos", "Toys", 5.99, 8), 
("LipGloss", "MakeUp", 12.95, 5), ("SoccerBall", "Sporting Goods", 15.95, 6),
("Snapple", "Grocery", 1.99, 13) 







