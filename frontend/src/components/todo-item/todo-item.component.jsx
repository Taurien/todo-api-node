import { useState } from 'react'
// Components
import Button from '../UI/button/button.component'

import classes from './todo-item.styles.module.css'

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
		<div className={classes.item}>
			{!showEditForm ? (
				<>
					<div className={classes.info}>
						<p className={classes.item__description}>#{id}</p>
						<span className={completed? classes.true : classes.false} onClick={editCompleted}>{completed? 'completed' : 'pending' }</span>
					</div>
					<p className={classes.item__description}>{editContent}</p>
				</>
			) : (
				<div className={classes['edit-form']}>
					<input
						type="text"
						onChange={onChangeHandler}
						value={editContent}
						placeholder={content}
						className={classes['edit-form__input']}
					/>

					<Button label="Edit" type="submit" onClick={onEditTodoHandler} />
				</div>
			)}

			{/* Action Buttons */}
			<div className={classes['action-buttons']}>
				<Button onClick={showEditFormHandler} type="button" label={showEditForm ? 'Cancel' : 'Edit'} />
				<Button onClick={onDeleteTodoHandler} type="button" label="Delete" />
			</div>
		</div>
	)
}

export default TodoItem
