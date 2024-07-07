const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost/my-portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())

const photosRouter = require('./routes/photos')
app.use('/photos', photosRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})