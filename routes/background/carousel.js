const express = require('express')
const router = express.Router()
const carouselController = require('../../controllers/background/carousel')

router.post('/carousel-search/:page/:size', (req, res) => {
  try {
    const page = req.param('page')
    const size = req.param('size')
    const result = req.body
    carouselController.carouselSearch({page, size, ...result}).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/carousel-getbyid', (req, res) => {
  try {
    var result = req.query;
    carouselController.getCarouselById(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/carousel-update' , (req, res) => {
  try {
    carouselController.carouselUpdate(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/carousel-exist' , (req, res) => {
  try {
    carouselController.carouselIsExist(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.delete('/carousel-delete', (req, res) => {
  try {
    carouselController.carouselDelete(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})
module.exports = router