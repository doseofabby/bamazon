# bamazon
# Node.js & MySQL

## Overview

In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.

## Instructions

### Challenge #1: Customer View (Minimum Requirement)

1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.
   
   ![bc1](https://user-images.githubusercontent.com/50628151/63897791-67937200-c9c4-11e9-9018-79c004102a89.PNG)
   
   ![bc2](https://user-images.githubusercontent.com/50628151/63897799-6cf0bc80-c9c4-11e9-9b42-d9d55ae14a3c.PNG)
   
   ![bc3](https://user-images.githubusercontent.com/50628151/63897803-6f531680-c9c4-11e9-96b1-78c96b023077.PNG)
   
   ![bc4](https://user-images.githubusercontent.com/50628151/63897809-7548f780-c9c4-11e9-996e-099917cd56f9.PNG)
   
   
   
   
