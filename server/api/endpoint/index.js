'use strict';

var express = require('express');
var controller = require('./endpoint.controller'); // loads sample.controller.js
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json()); // required to read the posted body of a request - which is done inside the POST functions controller

router.get('/', controller.get);

module.exports = router;
