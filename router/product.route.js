var express = require('express');
var router = express.Router();
var controller = require('../controller/product.controller');


router.get('/search', controller.search);

router.get('/supplier', controller.supplier);


module.exports = router;