var express = require('express');
var router = express.Router();
var Connection = require("../config/database-config");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Clients are here');
});
router.get("/get", function(req, res, next) {
 
    Connection.query("SELECT * FROM Clients", function(error, results, fields) {
    
      if (error) throw error;
      console.log("The solution is: ", results);
      res.send(results);
    });
  });

module.exports = router;
