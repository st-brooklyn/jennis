'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SongSchema = new Schema({
    name: String,
    lyrics: String
});

module.exports = mongoose.model('Song', SongSchema);