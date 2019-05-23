var express = require('express');
var router = express.Router();
var controller = require('../controller/cart.controller');
var multer = require('multer');
var upload = multer({dest:'./public/uploads'});


router.get('/cart', controller.getCart);

// lay id cua mat hang duoc them vao gio hang
router.get('/:id', controller.getIdProduct);

router.get('/:id/delete', controller.getDelete);

module.exports = router;