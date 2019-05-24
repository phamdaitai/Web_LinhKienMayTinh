var express = require('express');
var router = express.Router();
var controller = require('../controller/buy.controller');
var multer = require('multer');
var upload = multer({dest:'./public/uploads'});


router.get('/', controller.buy);

router.get('/payment', controller.payment);


module.exports = router;