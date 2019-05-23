var express = require('express');
var router = express.Router();
var controller = require('../controller/productmanager.controller');
//var authMiddlewares = require('../middlewares/auth.middlewares');
var multer = require('multer');
var upload = multer({dest:'./public/products'});// ghi file anh vao day


router.get('/', controller.product);

router.get('/create', controller.getCreate);

router.post('/create',upload.single('image'), controller.postCreate);

router.get('/:id/delete', controller.getDelete);

router.get('/:id/update', controller.getUpdate);

router.post('/:id',upload.single('image'), controller.postUpdate);



module.exports = router;