/*
 * @Descripttion: 送养领养模块
 * @Author: WSY
 * @Date: 2019-09-17 09:27:03
 * @LastEditTime: 2019-09-25 18:35:32
 */
const express = require('express')
const router = express.Router()
const petController = require('../../controllers/foreground/pet')

// 送养
router.post('/sendpet', (req, res) => {
  try {
    petController.petSend(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/petbreed', (req, res) => {
  try {
    petController.petBreed().then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/petarticle', (req, res) => {
  try {
    var result = req.query;
    petController.petAdoptArticle(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/detailarticle/:id', (req, res) => {
  try {
    const id = req.param('id')
    petController.petDetailArticle(id).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 发表评论
router.post('/sendcomment', (req, res) => {
  try {
    petController.petSendComment(req.body).then(result => {
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
    petController.petGetComment(id).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 阅读数加一
router.post('/addreadnum', (req, res) => {
  try {
    petController.petAddReadNum(req.body).then(result => {
      res.json(result)
    }) 
  } catch (err) {
    throw new Error(err)
  }
})

// 点击喜欢
router.post('/petlike', (req, res) => {
  try {
    petController.petLikeNum(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 取消喜欢
router.post('/petunlike', (req, res) => {
  try {
    petController.petUnLikeNum(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取喜欢数
router.get('/getlike/:id', (req, res) => {
  try {
    const id = req.param('id')
    petController.petGetLike(id).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取轮播图
router.get('/getswiper', (req, res) => {
  try {
    petController.petSwiper().then(result => {
      res.json(result)
    })
  } catch(err) {
    throw new Error(err)
  }
})
module.exports = router