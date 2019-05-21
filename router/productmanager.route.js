var express = require('express');
var router = express.Router();
var controller = require('../controller/productmanager.controller');
//var authMiddlewares = require('../middlewares/auth.middlewares');
var multer = require('multer');
var upload = multer({dest:'./public/products'});// ghi file anh vao day


router.get('/', controller.product);

router.get('/create', controller.getCreate);

router.post('/create',upload.single('image'), controller.postCreate);

module.exports = router;