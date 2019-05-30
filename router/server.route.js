var express = require('express');
var router = express.Router();
var controller = require('../controller/server.controller');

router.get('/', controller.server);


module.exports = router;