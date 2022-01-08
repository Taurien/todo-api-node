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
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
})

// Export model
module.exports = { Todo }