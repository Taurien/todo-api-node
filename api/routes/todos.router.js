const express = require('express')

// Controllers
const { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require('../controllers/todos.controller')

const router = express.Router()

router.route('/')
  .get(getAllTodos)
  .post(createTodo)

router.route('/:id')
  .get(getTodoById)
  .patch(updateTodo)
  .delete(deleteTodo)

// Fetch all todos
// app.get('/',
//     (req, res, next) => {
//         res.status(200).json({ status: 'success LOL', data: { todos } })
//     }
// )

// router.get('/',
    // (req, res, next) => {
    //     res.status(200).json({ status: 'success LOL', data: { todos } })
    // }
// )

// router.get('/', getAllTodos)

// Create new todo
// router.post('/', createTodo)
// router.post('/',
//     (req, res, next) => {
//         //Get todo content from req.body
//         const { content } = req.body
//         //Create a new todo with id n content
//         const newTodo = { 
//             id: Math.round(Math.random() * 10),
//             content
//         }
//         //Push new todo to array
//         todos.push(newTodo)
//         //Send newTodo to the client
//         res.status(201).json({ status: 'success TODO', data: { newTodo } })
//     }
// )

// Update todo (patch)
// router.patch('/:id', updateTodo)

// export default router
module.exports = {todosRouter: router}

//xx export const router = router
// exports.todosRouter = router