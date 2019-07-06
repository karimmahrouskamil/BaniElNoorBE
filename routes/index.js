var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index');
});
router.get('/test', function(req, res, next) {
   res.json({'test':'working'});
});

module.exports = router;
// again