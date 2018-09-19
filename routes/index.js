var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { 
        title: 'Mzansi Forex Academy',
        message: 'Welcome to Mzansi Forex Academy'
    });
});

module.exports = router;
