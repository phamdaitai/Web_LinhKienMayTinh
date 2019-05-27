var express = require('express');
var router = express.Router();
var controller = require('../controller/person.controller');
var multer = require('multer');
var upload = multer({dest:'./public/uploads'});

router.get('/person', controller.getPerson);

router.get('/:id/update', controller.getUpdate);

router.post('/:id',upload.single('avatar'), controller.postUpdate);

router.get('/logout', controller.logout);

module.exports = router;