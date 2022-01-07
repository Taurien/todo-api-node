const { DataTypes } = require('sequelize')
const { db } = require('../utils/database')

const User = db.define('users', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: 'available',
    },
})
