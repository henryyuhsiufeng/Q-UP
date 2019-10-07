var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Q-UP' });
});

/* GET register page*/
router.get('/register', function(req, res, next){
  res.render("register");
});

/* GET Login page*/
router.get('/login', function(req, res, next){
  res.render("login");
});

module.exports = router;
