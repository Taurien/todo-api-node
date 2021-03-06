import { useState, useEffect } from 'react'
import axios from 'axios'
import Div100vh from 'react-div-100vh'

// Components
import Form from './components/form/form.component'
import TodoList from './components/todo-list/todo-list.component'

import './styles/App.style.scss'

const App = () => {
	// State
	const [todos, setTodos] = useState([])

	const addTodo = todo => {
		setTodos(prevState => [...prevState, todo])
	}

	const fetchTodos = async () => {
		// TODO: Fetch data from API
		await axios.get('http://localhost:4000/api/v1/todos')
		.then(response => {
			const resTodos = response.data.data.todos
			setTodos(resTodos)
		})
		.catch(err => {
			console.log(err)
		})

		
		// const res = await axios.get('http://localhost:4000/api/v1/todos')
		// //console.log(res.data)
		// const resTodos = res.data.data.todos
		// setTodos(resTodos)

	}

	const editTodo = (id, newContent, completed) => {

		
		if (completed === true || completed === false) {

			// console.log(`A ${completed}`)
			// console.log(`B ${!completed}`)
			axios.patch(`http://localhost:4000/api/v1/todos/${id}`, { completed: !completed })
			.catch(err => {
				console.log(err)
			})

			setTodos(todos.map(todo => +todo.id === +id ? 
					{...todo, completed: !todo.completed}
					: todo
					))
		}

		if (newContent) {
			// TODO: Send data to API -- update the slcted ToDo by id 
			axios.patch(`http://localhost:4000/api/v1/todos/${id}`, { content: newContent })
			.catch(err => {
				console.log(err)
			})

			setTodos(prevState => {
				const currentTodos = prevState
	
				const todoIndex = currentTodos.findIndex(todo => +todo.id === +id)
	
				const updatedTodo = currentTodos[todoIndex]
	
				updatedTodo.content = newContent
	
				currentTodos[todoIndex] = updatedTodo
	
				return currentTodos
			})
		}

		
	}

	const deleteTodo = id => {
		// Delete the slcted ToDo by id
		axios.delete(`http://localhost:4000/api/v1/todos/${id}`)
		.then(response => {
			// console.log(response)
		})
		.catch(err => {
			console.log(err)
		})

		setTodos(prevState => {
			const currentTodos = prevState
			
			const updatedTodos = currentTodos.filter(todo => +todo.id !== +id)
			
			return [...updatedTodos]
		})
	}

	// When component is mounted, fetch todos
	useEffect(() => {
		fetchTodos()
	}, [])

	return (
		<div className="app">
			<Form onAddTodo={addTodo} />
			<TodoList onDeleteTodo={deleteTodo} onEditTodo={editTodo} items={todos} />
		</div>
	)
}

export default App
