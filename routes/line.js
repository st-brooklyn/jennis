'use strict';

var express = require('express');
var router = express.Router();

const line = require('@line/bot-sdk');
const configs = require('../configs');
const linecontroller = require('../controllers/linecontroller');

var config = {
    channelAccessToken: 'R8eisEchDL1Js2/gK0G7m4OA8oROrGNnNZ0vwP6qa9U2G5VAFf8m2YJ/RIF1mhyCxMR26pryIXXSi52xw6KVsmBqX6eYqSesN6hnL6Ow69x2eb6CWVZgA05CHF7X2qknQAtfYqRO/dTA1CG5ItJEFQdB04t89/1O/w1cDnyilFU=',
    channelSecret: 'c3f942444930eaacc840cee97adc7fd0'
 }

/* GET home page. */
router.post('/webhook', line.middleware(config), linecontroller.webhook);
router.get('/webhook', (req, res) => {
    console.log("hello");
}) 

module.exports = router;
