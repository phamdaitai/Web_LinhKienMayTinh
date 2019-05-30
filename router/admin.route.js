var express = require('express');
var router = express.Router();
var controller = require('../controller/admin.controller');
var multer = require('multer');
var upload = multer({dest:'./public/product'});
var adminMiddlewares = require('../middlewares/admin.middlewares');

//lay danh sach admin
router.get('/', adminMiddlewares.requireAuth, controller.getAdmin);

//dang nhap admin
router.get('/login', controller.login);

router.post('/login', controller.postLogin);

//tao tai khoan admin
router.get('/create', controller.getCreate);

router.post('/create',upload.single('avatar'), controller.postCreate);

//danh sach admin
router.get('/list', controller.list); 

//thong tin ca nhan admin
router.get('/detail', controller.detail);

//chinh sua thong tin ca nhan admin
router.get('/:id/update', controller.getUpdate);

router.post('/:id',upload.single('avatar'), controller.postUpdate);

//dang xuat admin
router.get('/logout', controller.logout);


module.exports = router;