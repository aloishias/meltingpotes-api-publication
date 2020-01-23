const Feedback = require('../model/Feedback.js')
const validateUUID = require('uuid-validate')

module.exports = {
    list(req, res) {
        const q = req.query

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        Feedback.findAll({
                offset,
                limit
            })
            .then(cas => {
                if (!cas) res.sendStatus(404)
                else res.status(200).send(cas)
            })
            .catch(err => res.status(500).send(err))
    },

    getById(req, res) {
        const q = req.query
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        Feedback.findAll({
                where: {
                    feedback_id: id
                },
                offset,
                limit
            })
            .then(cas => {
                if (!cas) res.sendStatus(404)
                else res.status(200).send(cas)
            })
            .catch(err => res.status(500).send(err))
    },

    getByPublicationId(req, res) {
        const q = req.query
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        Feedback.findAll({
                where: {
                    feedback_publicationid: id
                },
                offset,
                limit
            })
            .then(cas => {
                if (!cas) res.sendStatus(404)
                else res.status(200).send(cas)
            })
            .catch(err => res.status(500).send(err))
    },

    createFeedback(req, res) {
        const feedback_userid = req.body.feedback_userid
        const feedback_feedback = req.body.feedback_feedback
        const feedback_publicationid = req.body.feedback_publicationid

        // Create a new user
        Feedback.create({
            feedback_userid: feedback_userid,
            feedback_feedback: feedback_feedback,
            feedback_publicationid: feedback_publicationid
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(201).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    updateFeedback(req, res) {
        const id = req.params.id
        const feedback_userid = req.body.feedback_userid
        const feedback_feedback = req.body.feedback_feedback
        const feedback_publicationid = req.body.feedback_publicationid

        Feedback.update({
            feedback_userid: feedback_userid,
            feedback_feedback: feedback_feedback,
            feedback_publicationid: feedback_publicationid
        }, {
            where: {
                feedback_id: id
            }
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(200).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    destroyFeedback(req, res) {
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        Feedback.destroy({
            where: {
                feedback_id: id
            }
        }).then(() => res.sendStatus(204))
        .catch(err => res.status(500).send(err));
    }
}