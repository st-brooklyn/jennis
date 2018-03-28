'use strict';

var express = require('express');
var router = express.Router();

const line = require('@line/bot-sdk');
const configs = require('../configs');
const linecontroller = require('../controllers/linecontroller');

/* GET home page. */
router.post('/webhook', line.middleware(configs.lineconfig), linecontroller.webhook(req, res));
router.get('/webhook', (req, res) => {
    console.log("hello");
}) 

module.exports = router;
