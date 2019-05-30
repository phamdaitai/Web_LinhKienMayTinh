var express = require('express');
var router = express.Router();
var controller = require('../controller/buy.controller');
var multer = require('multer');
var upload = multer({dest:'./public/uploads'});

//mua hang
router.get('/', controller.buy);

//thong tin thanh toan
router.get('/order', controller.payment);

//xac nhan thong tin thanh toan
router.get('/:id/verify', controller.verify);


module.exports = router;