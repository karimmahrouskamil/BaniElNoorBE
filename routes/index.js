var express = require('express');
var router = express.Router();
var db = require('../config/database-config');
/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index');
});
router.get('/test', function(req, res, next) {
   res.json({'test':'working'});
   
});

module.exports = router;
// again