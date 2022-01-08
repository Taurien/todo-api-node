import './button.style.scss'

const Button = ({ onClick, type, label }) => {
	return (
		<button
			onClick={onClick}
			type={type || 'submit'}
			className='button'
		>
			{label}
		</button>
	)
}

export default Button
