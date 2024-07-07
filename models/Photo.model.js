const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoSchema = new Schema({
    title: String,
    description: String,
    url: String,
    collection: String,
    date: { type: Date, default: Date.now }
});

const Photo = mongoose.model('Photo', photoSchema)
module.exports = Photo
