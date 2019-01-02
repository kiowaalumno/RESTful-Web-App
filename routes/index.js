var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET adduser page. */
router.get('/adduser', function(req, res, next) {
  res.render('adduser', { title: 'Express' });
});

module.exports = router;
