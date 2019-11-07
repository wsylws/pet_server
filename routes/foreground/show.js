/*
 * @Descripttion: 宠物秀模块
 * @Author: WSY
 * @Date: 2019-09-24 17:33:38
 * @LastEditTime: 2019-09-25 19:40:23
 */
const express = require('express')
const router = express.Router()
const showController = require('../../controllers/foreground/show')

// 发布宠物秀
router.post('/sendshow', (req, res) => {
  try {
    showController.sendShow(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取宠物秀信息
router.get('/getshow', (req, res) => {
  try {
    var result = req.query;
    showController.getShow(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取宠物秀详情
router.get('/getshowdetail/:id', (req, res) => {
  try {
    const id = req.param('id')
    showController.showDetail(id).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 发表评论
router.post('/sendcomment', (req, res) => {
  try {
    showController.showSendComment(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取评论
router.get('/getcomment/:id', (req, res) => {
  try {
    const id = req.param('id')
    showController.showGetComment(id).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取首页评论数
router.get('/getindexcomment/', (req, res) => {
  try {
    showController.showIndexComment().then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

module.exports = router