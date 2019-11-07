const express = require('express')
const router = express.Router()
const roleController = require('../../controllers/background/role')

router.post('/user-search/:page/:size', (req, res) => {
  try {
    const page = req.param('page')
    const size = req.param('size')
    const result = req.body
    roleController.userSearch({page, size, ...result}).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/reset-password', (req, res) => {
  try {
    
    roleController.resetPassword(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.delete('/user-delete', (req, res) => {
  try {
    roleController.deleteUser(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/admin-search/:page/:size', (req, res) => {
  try {
    const page = req.param('page')
    const size = req.param('size')
    const result = req.body
    roleController.adminSearch({page, size, ...result}).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/admin-getbyid', (req, res) => {
  try {
    var result = req.query;
    roleController.getAdminById(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/admin-exist' , (req, res) => {
  try {
    roleController.adminIsExist(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/admin-update' , (req, res) => {
  try {
    roleController.adminUpdate(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.delete('/admin-delete', (req, res) => {
  try {
    roleController.adminDelete(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

module.exports = router