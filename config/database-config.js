var mysql = require("mysql");

/**
 * database connection
 */

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sys",
  port: 3306
});

connection.connect(function(err) {
  if (err) {
    console.log("ERROR" + err);
  } else {
    console.log("CONNECTED");
  }
});


module.exports = connection;

