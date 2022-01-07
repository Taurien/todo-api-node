const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

// Connect to DB
const db = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST, //'localhost' '127.0.0.1'
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    port: process.env.DB_PORT,
    logging: false,
})

module.exports = { db }