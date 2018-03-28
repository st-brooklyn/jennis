'use strict';

var express = require('express');
var router = express.Router();

const configs = require('../configs');

const line = require('@line/bot-sdk');
const linecontroller = require('../controllers/linecontroller');

/* GET home page. */
router.post('/webhook', line.middleware(configs.lineconfig), (req, res) => {
    console.log(JSON.stringify(req));
    linecontroller.webhook(req, res);
});

router.get('/webhook', (req, res) => {
    console.log("hello");
    res.status(200).end();
}) 

module.exports = router;
