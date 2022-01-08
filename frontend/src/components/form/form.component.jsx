import { useState } from 'react'
import axios from 'axios'

// Components
import Button from '../UI/button/button.component'

import './form.style.scss'

const Form = ({ onAddTodo }) => {
	// State
	const [todo, setTodo] = useState('')
	const [showError, setShowError] = useState(false)

	const onSubmitHandler = event => {
		event.preventDefault()

		// Show error if input is empty
		if (!todo) {
			setShowError(true)
			return
		}

		// TODO: Send data to API
		axios.post('http://localhost:4000/api/v1/todos/', { content: todo })
		.then(response => {
			// console.log(response.data.data.newTodo)

			// Extract #id from res. n' send data to App.js
			const newTodo = {
				id: response.data.data.newTodo.id, //X
				content: todo,
				completed : false,
			}
			onAddTodo(newTodo)
		})
		.catch(err => {
			console.log(err)
		})
		

		setTodo('')
	}

	const onChangeHandler = event => {
		const newValue = event.target.value

		if (newValue.length > 0) setShowError(false)
		else setShowError(true)

		setTodo(newValue)
	}

	return (
		<form onSubmit={onSubmitHandler} id='form'>
			<label className='form__label' htmlFor="todo">
				Enter your To Do:
			</label>
			<div className='form__container'>
				<input
					className={`form__input ${showError ? 'error' : '' }`}
					placeholder="Enter a description"
					type="text"
					value={todo}
					onChange={onChangeHandler}
					name="todo"
					id="todo"
				/>
				<Button type="submit" label='Submit' />
			</div>
		</form>
	)
}

export default Form
