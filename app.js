const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 5005

mongoose.connect('mongodb://localhost:27017/miki-portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json())

const photosRouter = require('./routes/photos.routes')
app.use('/photos', photosRouter)

module.exports = app
