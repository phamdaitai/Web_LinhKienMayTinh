var express = require('express');
var router = express.Router();
var controller = require('../controller/cart.controller');

router.get('/cart', controller.getCart);

// lay id cua mat hang duoc them vao gio hang
router.get('/:id', controller.getIdProduct);
    
module.exports = router;