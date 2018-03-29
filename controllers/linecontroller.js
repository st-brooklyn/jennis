'use strict';

const configs = require('../configs');

const line = require('@line/bot-sdk');
const lineClient = new line.Client(configs.jennisbot);
const SongModel = require('../models/songs');

function webhookImp(req, res) {
    console.log(JSON.stringify(req.body.events));
    Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      //console.error(err);
      console.log(err.stack);
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
    
    SongModel.create({
        name: event.message.text,
        lyrics: event.source.userId
    })
    .then((result) => {
        echo.text = result._id;
        lineClient.pushMessage(event.source.userId, echo);
    })
    .catch((ex) => {
        console.log('Error: ' + ex.stack);
    });
    
      // use reply API
    //return lineClient.replyMessage(event.replyToken, echo);
    //return lineClient.pushMessage(event.source.userId, echo);
}

module.exports = {
    webhook: webhookImp
}