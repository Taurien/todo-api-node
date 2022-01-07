const { DataTypes } = require('sequelize')
const { db } = require('../utils/database')

// Define model
const Todo = db.define('todos', {
    // Define attributes
    id: {
        // Define DataType
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: 'pending'
    },
})

// Export model
module.exports = { Todo }