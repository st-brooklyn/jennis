'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SongSchema = new Schema({
    name: string,
    lyrics: string
});

module.exports = db.model('Song', SongSchema);