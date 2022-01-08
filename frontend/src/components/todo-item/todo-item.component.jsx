import { useState } from 'react'
// Components
import Button from '../UI/button/button.component'

import './todo-item.style.scss'

const TodoItem = ({ id, content, completed, onEditHandler, onDeleteHandler }) => {
	// State
	const [ showEditForm, setShowEditForm ] = useState(false)
	const [ editContent, setEditContent ] = useState(content)
	// const [ editStatus, setEditStatus ] = useState(status)

	const showEditFormHandler = () => {
		setShowEditForm(prevState => !prevState)
	}

	const onChangeHandler = event => {
		const updatedValue = event.target.value
		setEditContent(updatedValue)
	}

	const onEditTodoHandler = () => {
		onEditHandler(id, editContent, null)
		setShowEditForm(false)
	}

	const editCompleted = () => {
		onEditHandler(id, null, completed)
	}

	const onDeleteTodoHandler = () => {
		onDeleteHandler(id)
	}

	return (
		<div className='item'>
			{!showEditForm ? (
				<>
					<div className='info'>
						<p className='item__id'>#{id}</p>
						<span className={`isCompleted ${completed? 'true' : 'false'}`} onClick={editCompleted}>{completed? 'completed' : 'pending' }</span>
					</div>
					<p className='item__description'>{editContent}</p>
				</>
			) : (
				<div className='edit-form'>
					<input
						type="text"
						onChange={onChangeHandler}
						value={editContent}
						placeholder={content}
						className='edit-form__input'
					/>

					<Button label="Submit" type="submit" onClick={onEditTodoHandler} />
				</div>
			)}

			{/* Action Buttons */}
			<div className='action-buttons'>
				<Button onClick={showEditFormHandler} type="button" label={showEditForm ? 'Cancel' : 'Edit'} />
				<Button onClick={onDeleteTodoHandler} type="button" label="Delete" />
			</div>
		</div>
	)
}

export default TodoItem
