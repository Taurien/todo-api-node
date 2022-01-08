// Components
import TodoItem from '../todo-item/todo-item.component'

import './todo-list.style.scss'

const TodoList = ({ items, onEditTodo, onDeleteTodo }) => {
	return (
		<div className='list'>
			{/* Render list of todos */}
			{items.length > 0 &&
				items.map(({ id, content, completed }) => (
					<TodoItem
						key={id}
						id={id}
						content={content}
						completed={completed}
						onEditHandler={onEditTodo}
						onDeleteHandler={onDeleteTodo}
					/>
				))}

			{/* Show message if list is empty */}
			{items.length === 0 && (
				<p className='message'>No pending To Do's</p>
			)}
		</div>
	)
}

export default TodoList
