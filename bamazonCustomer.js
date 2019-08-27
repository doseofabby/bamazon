var mysql = require("mysql");
var inquirer= require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",

  
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Abigail09@",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " );
 onlineShop();
});

function onlineShop() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    buySomething();
  });
}

function buySomething () {
    inquirer.prompt([
        {
            name: "id",
            message: "Provide the ID of the Item you wish to purchase"
        }, 
        {
            name: "howMany",
            message: "What quantity would you like?"
        }
    ]).then(function(response){
        connection.query("SELECT product_name, price, stock_quantity FROM products WHERE id = ?", [response.id], function(err,
            res) {
                if (err) throw err; 
                if (response.howMany > res[0].stock_quantity || res [0].stock_quantity === 0) {
                    console.log("Oops! Not enough inventory!");
                }
                else{
                    console.log(res);
                    console.log(res[0].price);
                    console.log(response.howMany);
                    let total = res[0].stock_quantity - response.howMany;
                    let reducedStock = res[0].stock_quantity - response.howMany;
                    console.log(`Great! You owe me $${total}. Muchas Gracias!`);
                    connection.query(`UPDATE products SET stock_quantity = ${reducedStock} WHERE id = ${response.id}`,function
                    (err) {
                        if (err) throw(err);
                    });
                };
                connection.end();
            });
    });
}; 