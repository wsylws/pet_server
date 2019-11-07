/*
 * @Descripttion: 上次图片
 * @Author: WSY
 * @Date: 2019-09-17 18:00:03
 * @LastEditTime: 2019-09-17 18:08:01
 */
const express = require('express')
const router = express.Router()
// 引入七牛云配置
const qnconfig = require('../../config/qiniu.js')

router.get('/getToken', (req, res) => {
  res.status(200).send(qnconfig.uploadToken)
})

module.exports = router