var express = require('express')
var router = express.Router()

const feedbackController = require('../controllers/feedback.js')

router.get('/feedbacks', feedbackController.list)
router.get('/feedbacks/:id', feedbackController.getById)
router.get('/feedbacksByPublicationId/:id', feedbackController.getByPublicationId)
router.post('/feedbacks', feedbackController.createFeedback)
router.put('/feedbacks/:id', feedbackController.updateFeedback)
router.delete('/feedbacks/:id', feedbackController.destroyFeedback)

module.exports = router