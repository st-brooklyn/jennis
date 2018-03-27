'use strict';

const configs = require('../configs');

const line = require('@line/bot-sdk');
const lineClient = new line.Client(configs.lineconfig);

function webhookImp(req, res) {
    Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
}

function handleEvent (event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
        // ignore non-text-message event
        return Promise.resolve(null);
      }
    
      // create a echoing text message
      const echo = { type: 'text', text: event.message.text };
    
      // use reply API
    //return lineClient.replyMessage(event.replyToken, echo);
    return lineClient.pushMessage(event.source.userId, echo);

}

module.exports = {
    webhook: webhookImp
}