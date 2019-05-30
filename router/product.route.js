var express = require('express');
var router = express.Router();
var controller = require('../controller/product.controller');


router.get('/search', controller.search);

router.get('/dell', controller.getDell);

router.get('/fulhen', controller.getFulhen);

router.get('/logitech', controller.getLogitech);

router.get('/lenovo', controller.getLenovo);

router.get('/hp', controller.getHp);

//router.post('/list', controller.list);

module.exports = router;