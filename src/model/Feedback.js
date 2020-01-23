const Sequelize = require('sequelize')
const db = require('../config/db.js')

// Model definition
const Feedback = db.define('Feedback', {
    feedback_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4()
    },
    feedback_userid: {
        type: Sequelize.UUID,
        allowNull: false,
    },
    feedback_feedback: {
        type: Sequelize.STRING,
        allowNull: false
    },
    feedback_publicationid: {
        type: Sequelize.UUID,
        allowNull: false
    }
})

Feedback.sync()


module.exports = Feedback