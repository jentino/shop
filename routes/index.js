var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { 
        title: 'Mzansi Forex Academy',
        lessontitle: "Welcome Gakusei",
        welcomemessage: 'Learn to earn with us'
    });
});

module.exports = router;
