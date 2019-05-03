const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        user_name: {
            type: Sequelize.STRING
        },
        user_pass:{
            type: Sequelize.STRING
        },
        user_mail:{
            type: Sequelize.STRING
        },
        user_phone:{
            type: Sequelize.STRING
        },
        user_andress:{
            type: Sequelize.STRING
        }
    },

    {
        timestamps: false
    }
)