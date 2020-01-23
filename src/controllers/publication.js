const Publication = require('../model/Publication.js')
const validateUUID = require('uuid-validate')

module.exports = {
    list(req, res) {

        const q = req.query
        
        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        Publication.findAll({
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

        Publication.findAll({
                where: {
                    publication_id: id
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

    getByUserId(req, res) {
        const q = req.query
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        Publication.findAll({
                where: {
                    publication_userid: id
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

    createPublication(req, res) {
        const publication_userid = req.body.publication_userid
        const publication_description = req.body.publication_description
        const publication_pictureLink = req.body.publication_pictureLink

        // Create a new user
        Publication.create({
            publication_userid: publication_userid,
            publication_description: publication_description,
            publication_pictureLink: publication_pictureLink
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(201).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    updatePublication(req, res) {
        const id = req.params.id
        const publication_userid = req.body.publication_userid
        const publication_description = req.body.publication_description
        const publication_pictureLink = req.body.publication_pictureLink

        Publication.update({
            publication_userid: publication_userid,
            publication_description: publication_description,
            publication_pictureLink: publication_pictureLink
        }, {
            where: {
                publication_id: id
            }
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(200).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    destroyPublication(req, res) {
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        Publication.destroy({
            where: {
                publication_id: id
            }
        }).then(() => res.sendStatus(204))
        .catch(err => res.status(500).send(err));
    }

}