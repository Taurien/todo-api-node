// Models
const { Todo } = require('../models/todo.model')
const { User } = require('../models/users.model')

const initModels = () => {
    // Model relations
    User.hasMany(Todo)
    Todo.belongsTo(User)
}
