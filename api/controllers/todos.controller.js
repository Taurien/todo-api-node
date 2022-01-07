// Models
const { Todo } = require('../models/todo.model')

// Utils
const { catchAsync } = require('../utils/catchAsync')
const { AppError } = require('../utils/appError')
// const { User } = require('../models/users.model')

exports.getAllTodos = catchAsync( async (req, res, next) => {
        // SELECT * FROM todos
        // JOIN users ON users.id = todos.userId
        // WHERE status = 'pending'
        const todos = await Todo.findAll()
        
        //{     where: { status: 'pending'},
        //     include: [{
        //         model: User,
        //         attributes: { include: ['id', 'name', 'email'] },
        //         // attributes: { exclude: ['password'] }
        //     }]
        // })

        res.status(200).json({
            status: 'success',
            data: { todos }
        })
})

exports.getTodoById = catchAsync( async (req, res, next) => {
    const { id } = req.params

    // SELECT * FROM todos WHERE id = id
    const todo = await Todo.findOne({ where: { id } })

    if (!todo) return next(new AppError('ToDo not exists', 404))
    
    res.status(200).json({ status: 'success', data: { todo } })
})

exports.createTodo = catchAsync( async (req, res, next) => {
    const { content } = req.body
    // const { content, userId } = req.body

    // INSERT INTO todos (content, userId) VALUES ('an entry', 1)
	// const newTodo = await Todo.create({ content, userId })
    const newTodo = await Todo.create({ content })

    // Send Todo to the client
    res.status(201).json({ status: 'success', data: { newTodo } })
})

exports.updateTodo = catchAsync( async (req, res, next) => {
    const { id } = req.params
    const { content } = req.body

    //   Find ToDo with the given id -- SELECT * FROM todos WHERE id = id
    const todoExists = await Todo.findOne({ where: { id } })

    //throw Error('Invalid id')
    if (!todoExists) return next(new AppError('ToDo not exists', 404))

    // UPDATE todos SET content = 'ddsds' WHERE id = id
    // await Todo.update({ content }, { where: { id } })       
    await todoExists.update({ content })

    res.status(204).json({ status: 'success', data: "updated" }) //no content
})

exports.deleteTodo = catchAsync( async (req, res, next) => {
    const { id } = req.params

    const todoExists = await Todo.findOne({ where: { id } })

    if (!todoExists) return next(new AppError('Cant delete cuz it doesnt exists', 404))
    
    // DELETE FROM todos WHERE id = id
    //await Todo.destroy({ where: { id } })
    await todoExists.destroy()
    // await todoExists.update({ status: 'deleted' })

    // if ToDo list is empty, restarts the main count to zero
    const todoLength = await Todo.findAndCountAll()
    // console.log(`X im alive n' there's ${todoLength.count} todo's left`)
    if (todoLength.count === 0){
        // restart the primary key n' clean 
        await Todo.destroy({ restartIdentity: true, truncate : true, cascade: false })
        // console.log(`Y im alive n' there's ${todoLength.count} todo's left`)
    }

    res.status(204).json({ status: 'success', data: "it works" }) //no content


    //     return res.status(201).
    //     json({ 
    //         status: 'success',
    //         data: {
    //             itemDeleted: { todoX },
    //             updatedList: { todos },
    //         } 
    //     })
    // }
})