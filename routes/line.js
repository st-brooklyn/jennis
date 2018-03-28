'use strict';

var express = require('express');
var router = express.Router();

const configs = require('../configs');

const line = require('@line/bot-sdk');
const linecontroller = require('../controllers/linecontroller');

/* GET home page. */

// route middleware that will happen on every request
router.use(function(req, res, next) {
    // log each request to the console
    console.log(JSON.stringify(req));

    // continue doing what we were doing and go to the route
    next(); 
});

router.post('/webhook', line.middleware(configs.jennisbot), (req, res) => {
    try {
        console.log(JSON.stringify(req));
        res.status(200).end();
        //linecontroller.webhook(req, res);
    }
    catch(ex) {
        console.log(ex.stack);
    }
});



router.get('/webhook', (req, res) => {
    console.log("hello");    
    res.status(200).end();
});

module.exports = router;
