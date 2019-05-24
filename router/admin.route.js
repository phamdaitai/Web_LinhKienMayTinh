var express = require('express');
var router = express.Router();
var controller = require('../controller/admin.controller');
var multer = require('multer');
var upload = multer({dest:'./public/product'});
var adminMiddlewares = require('../middlewares/admin.middlewares');


router.get('/', adminMiddlewares.requireAuth, controller.getAdmin);

router.get('/login', controller.login);

router.post('/login', controller.portLogin);

router.get('/create', controller.getCreate);

router.post('/create',upload.single('avatar'), controller.postCreate);

router.get('/list', controller.list); 

router.get('/detail', controller.detail);

router.get('/:id/update', controller.getUpdate);

router.post('/:id',upload.single('avatar'), controller.postUpdate);


module.exports = router;