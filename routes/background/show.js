const express = require('express')
const router = express.Router()
const showController = require('../../controllers/background/show')

router.post('/show-search/:page/:size', (req, res) => {
  try {
    const page = req.param('page')
    const size = req.param('size')
    const result = req.body
    showController.showSearch({page, size, ...result}).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/show-getbyid', (req, res) => {
  try {
    var result = req.query;
    showController.getshowById(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/show-update' , (req, res) => {
  try {
    showController.showUpdate(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.delete('/show-delete', (req, res) => {
  try {
    showController.showDelete(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/comment-search/:page/:size/:id', (req, res) => {
  try {
    const page = req.param('page')
    const size = req.param('size')
    const id = req.param('id')
    const result = req.body
    showController.commentSearch({page, size,id, ...result}).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/comment-getbyid', (req, res) => {
  try {
    var result = req.query;
    showController.getCommentById(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/comment-update' , (req, res) => {
  try {
    showController.commentUpdate(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.delete('/comment-delete', (req, res) => {
  try {
    showController.commentDelete(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})
module.exports = router