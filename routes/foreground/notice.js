const express = require('express')
const router = express.Router()
const noticeController = require('../../controllers/foreground/notice')

router.post('/addnotice', (req, res) => {
  try {
    noticeController.addNotice(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/getnotice', (req, res) => {
  try {
    noticeController.getNotice(req.query).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/getallnotice', (req, res) => {
  try {
    noticeController.getAllNotice(req.query).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/updetenotice', (req, res) => {
  try {
    noticeController.updateNotice(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})
module.exports = router