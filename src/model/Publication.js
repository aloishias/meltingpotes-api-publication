const Sequelize = require('sequelize')
const db = require('../config/db.js')

// Model definition
const Publication = db.define('Publication', {
    publication_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4()
    },
    publication_userid: {
        type: Sequelize.UUID,
        allowNull: false,
    },
    publication_description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publication_pictureLink: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Publication.sync()


module.exports = Publication
