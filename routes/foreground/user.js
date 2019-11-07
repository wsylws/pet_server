/*
 * @Descripttion: 登陆注册模块
 * @Author: WSY
 * @Date: 2019-09-14 16:53:11
 * @LastEditTime: 2019-09-16 00:42:25
 */

const express = require('express')
const router = express.Router()
const userController = require('../../controllers/foreground/user')

router.post('/register', (req, res) => {
  try {
    userController.creactRegister(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/login', (req, res) => {
  try {
    userController.userLogin(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

module.exports = router