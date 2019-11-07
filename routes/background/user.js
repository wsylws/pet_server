const express = require('express')
const router = express.Router()
const userController = require('../../controllers/background/user')

router.post('/login', (req, res) => {
  try {
    userController.userLogin(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/pwd', (req, res) => {
  try {
    userController.checkPwd(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.put('/pwd', (req, res) => {
  try {
    userController.updatePwd(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

module.exports = router