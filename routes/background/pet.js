const express = require('express')
const router = express.Router()
const petController = require('../../controllers/background/pet')

router.post('/adopt-search/:page/:size', (req, res) => {
  try {
    const page = req.param('page')
    const size = req.param('size')
    const result = req.body
    petController.adoptSearch({page, size, ...result}).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/adopt-getbyid', (req, res) => {
  try {
    var result = req.query;
    petController.getAdoptById(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/adopt-update' , (req, res) => {
  try {
    petController.adoptUpdate(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.delete('/adopt-delete', (req, res) => {
  try {
    petController.adoptDelete(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/breed-search/:page/:size', (req, res) => {
  try {
    const page = req.param('page')
    const size = req.param('size')
    const result = req.body
    petController.breedSearch({page, size, ...result}).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/breed-getbyid', (req, res) => {
  try {
    var result = req.query;
    petController.getBreedById(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/breed-update' , (req, res) => {
  try {
    petController.breedUpdate(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/breed-exist' , (req, res) => {
  try {
    petController.breedIsExist(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.delete('/breed-delete', (req, res) => {
  try {
    petController.breedDelete(req.body).then(result => {
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
    petController.commentSearch({page, size,id, ...result}).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.get('/comment-getbyid', (req, res) => {
  try {
    var result = req.query;
    petController.getCommentById(result).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/comment-update' , (req, res) => {
  try {
    petController.commentUpdate(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.delete('/comment-delete', (req, res) => {
  try {
    petController.commentDelete(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.post('/like-search/:page/:size/:id', (req, res) => {
  try {
    const page = req.param('page')
    const size = req.param('size')
    const id = req.param('id')
    const result = req.body
    petController.likeSearch({page, size,id, ...result}).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})

router.delete('/like-delete', (req, res) => {
  try {
    petController.likeDelete(req.body).then(result => {
      res.json(result)
    })
  } catch (err) {
    throw new Error(err)
  }
})
module.exports = router