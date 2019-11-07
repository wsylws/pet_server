const express = require('express')
const router = express.Router()
const bbsController = require('../../controllers/background/bbs')

router.post('/bbs-search/:page/:size', (req, res) => {
  try {
    const page = req.param('page')
    const size = req.param('size')
    const result = req.body
    bbsController.bbsSearch({page, size, ...result}).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/bbs-getbyid', (req, res) => {
  try {
    var result = req.query;
    bbsController.getbbsById(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/bbs-update' , (req, res) => {
  try {
    bbsController.bbsUpdate(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.delete('/bbs-delete', (req, res) => {
  try {
    bbsController.bbsDelete(req.body).then(result => {
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
    bbsController.commentSearch({page, size,id, ...result}).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/comment-getbyid', (req, res) => {
  try {
    var result = req.query;
    bbsController.getCommentById(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/comment-update' , (req, res) => {
  try {
    bbsController.commentUpdate(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.delete('/comment-delete', (req, res) => {
  try {
    bbsController.commentDelete(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})
module.exports = router