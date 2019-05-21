var express = require('express');
var router = express.Router();
var controller = require('../controller/cart.controller');

router.get('/cart', controller.getCart);
    
module.exports = router;