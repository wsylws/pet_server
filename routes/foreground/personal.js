/*
 * @Descripttion: 个人中心
 * @Author: WSY
 * @Date: 2019-10-12 09:37:13
 * @LastEditTime: 2019-10-12 22:07:58
 */
const express = require('express')
const router = express.Router()
const personalController = require('../../controllers/foreground/personal')

// 修改个人信息
router.post('/updateinfo', (req, res) => {
  try {
    personalController.updateInfo(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取自己发表的领养信息
router.get('/getmypets/', (req, res) => {
  try {
    var result = req.query
    personalController.getMyPets(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 修改宠物领养状态
router.post('/updatestatus', (req, res) => {
  try {
    personalController.updateStatus(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 删除宠物领养信息
router.post('/deletepet', (req, res) => {
  try {
    personalController.deletePet(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取自己喜欢的领养信息
router.get('/getmylikepets/', (req, res) => {
  try {
    var result = req.query
    personalController.getMyLikePets(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 获取自己喜欢的领养信息
router.get('/getmyarticle/', (req, res) => {
  try {
    var result = req.query
    personalController.getMyArticle(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

// 删除文章
router.post('/deletearticle', (req, res) => {
  try {
    personalController.deleteArticle(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})
module.exports = router