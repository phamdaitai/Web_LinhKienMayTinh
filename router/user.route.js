var express = require('express');
var router = express.Router();
var controller = require('../controller/user.controller');
var authMiddlewares = require('../middlewares/admin.middlewares');
var multer = require('multer');
var upload = multer({dest:'./public/uploads'});


router.get('/', authMiddlewares.requireAuth, controller.index); 

router.get('/create', controller.getCreate);

router.post('/create',upload.single('avatar'), controller.postCreate);

router.get('/search', controller.search);

router.get('/login', controller.login);

router.post('/login', controller.postLogin);

router.get('/:id', controller.userDetail);

router.get('/:id/delete', controller.getDelete);

router.get('/:id/update', controller.getUpdate);

router.post('/:id',upload.single('avatar'), controller.postUpdate);

module.exports = router;