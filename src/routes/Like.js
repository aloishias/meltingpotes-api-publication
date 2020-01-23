var express = require('express')
var router = express.Router()

const likeController = require('../controllers/like.js')

router.get('/likes', likeController.list)
router.get('/likes/:id', likeController.getById)
router.get('/likesByPublicationId/:id', likeController.getByPublicationId)
router.post('/likes', likeController.createLike)
router.delete('/likes/:id', likeController.destroyLike)

module.exports = router