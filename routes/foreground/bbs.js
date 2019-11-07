/*
 * @Descripttion: 论坛模块
 * @Author: WSY
 * @Date: 2019-10-08 16:40:51
 * @LastEditTime: 2019-10-14 08:36:08
 */

const express = require('express')
const router = express.Router()
const bbsController = require('../../controllers/foreground/bbs')

// 发布文章
router.post('/sendarticle', (req, res) => {
  try {
    bbsController.articleSend(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取论坛文章
router.get('/getarticle', (req, res) => {
  try {
    var result = req.query;
    bbsController.getArticle(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取论坛文章详情
router.get('/getdetailarticle/:id', (req, res) => {
  try {
    const id = req.param('id')
    bbsController.bbsDetail(id).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 发表回复
router.post('/sendreply', (req, res) => {
  try {
    bbsController.sendReply(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取回复
router.get('/getreply/:id', (req, res) => {
  try {
    const id = req.param('id')
    var result = req.query
    bbsController.getReply(id, result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取首页评论数
router.get('/getindexcomment/', (req, res) => {
  try {
    bbsController.bbsIndexComment().then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取网站首页最新文章
router.get('/getlastestarticle', (req, res) => {
  try {
    bbsController.getLatestArticle().then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取网站首页热门文章
router.get('/gethotarticle', (req, res) => {
  try {
    bbsController.getHotArticle().then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 阅读数加一
router.post('/addreadnum', (req, res) => {
  try {
    bbsController.articleAddReadNum(req.body).then(result => {
      res.json(result)
    }) 
  } catch (err) {
    throw new Error(err)
  }
})
module.exports = router