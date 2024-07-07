const express = require('express')
const router = express.Router()
const Photo = require('../models/Photo.model')

router.get('/', async (req, res) => {

    try {
        const photos = await Photo.find()
        res.json(photos)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {

    const photo = new Photo({
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        colletion: req.body.collection
    })

    try {
        const newPhoto = await photo.save()
        res.status(201).json(newPhoto)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.get('/:id', getPhoto, (req, res) => {
    res.json(res.photo)
})

async function getPhoto(req, res, next) {
    let photo;
    try {
        photo = await Photo.findById(req.params.id)
        if (photo == null) {
            return res.status(404).json({ message: 'Photo not found' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.photo = photo
    next()
}

module.exports = router
