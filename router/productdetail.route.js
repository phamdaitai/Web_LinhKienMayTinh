var express = require('express');
var router = express.Router();
var controller = require('../controller/productdetail.controller');

router.get('/:id', controller.product);



module.exports = router;