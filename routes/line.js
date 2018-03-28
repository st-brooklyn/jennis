'use strict';

var express = require('express');
var router = express.Router();

const configs = require('../configs');

const line = require('@line/bot-sdk');
const middleware = require('@line/bot-sdk').middleware;
const linecontroller = require('../controllers/linecontroller');


/* GET home page. */
router.post('/webhook', middleware(configs.lineconfig), (req, res) => {
    console.log(JSON.stringify(req));
    res.json(req.body.events)
    // Promise
    // .all(req.body.events.map(handleEvent))
    // .then((result) => res.json(result))
    // .catch((err) => {
    //   console.error(err);
    //   console.log(err.stack);
    //   res.status(500).end();
    // });
});

function handleEvent (event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
        // ignore non-text-message event
        return Promise.resolve(null);
      }
      else {

      }
    
      // create a echoing text message
      const echo = { type: 'text', text: event.message.text };
    
      // use reply API
    //return lineClient.replyMessage(event.replyToken, echo);
    return lineClient.pushMessage(event.source.userId, echo);
}

router.get('/webhook', (req, res) => {
    console.log("hello");
    res.status(200).end();
}) 

module.exports = router;
