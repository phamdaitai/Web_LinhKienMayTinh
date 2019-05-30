var express = require('express');
var router = express.Router();
var controller = require('../controller/advertisement.controller');
var multer = require('multer');
var upload = multer({dest:'./public/advertisement'});

//Quang cao
router.get('/ad', controller.getAd);

//Them quang cao
router.get('/create', controller.getCreate);

router.post('/create',upload.single('image'), controller.postCreate);

//Xoa quang cao
router.get('/:id/delete', controller.delete);

module.exports = router;