const Sequelize = require('sequelize')
const db = require('../config/db.js')

// Model definition
const Like = db.define('Like', {
    like_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4()
    },
    like_userid: {
        type: Sequelize.UUID,
        allowNull: false,
    },
    like_publicationid: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Like.sync()

module.exports = Like