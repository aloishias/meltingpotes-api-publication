var express = require('express')
var router = express.Router()

const publicationController = require('../controllers/publication.js')

router.get('/publications', publicationController.list)
router.get('/publications/:id', publicationController.getById)
router.get('/publicationsByUserId/:id', publicationController.getByUserId)
router.post('/publications', publicationController.createPublication)
router.put('/publications/:id', publicationController.updatePublication)
router.delete('/publications/:id', publicationController.destroyPublication)

module.exports = router