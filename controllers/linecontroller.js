'use strict';

const configs = require('../configs');

const line = require('@line/bot-sdk');
const lineClient = new line.Client(configs.jennisbot);

function webhookImp(req, res) {
    console.log(JSON.stringify(req));
    Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      console.log(err.stack);
      res.status(500).end();
    });
}

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
module.exports = {
    webhook: (req, res) => {
        webhookImp(req, res);
    }
}