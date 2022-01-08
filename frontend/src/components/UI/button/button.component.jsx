import SubmitIcon from '../../../assets/submit-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import DeleteIcon from '../../../assets/trash-icon.svg'
import CancelIcon from '../../../assets/cancel-icon.svg'

import './button.style.scss'

const Button = ({ onClick, type, label }) => {
	return (
		<button
			onClick={onClick}
			type={type || 'submit'}
			className='button'
		>
			{
				label === 'Submit' ? <img src={SubmitIcon} alt="" /> :
				label === 'Edit' ? <img src={EditIcon} alt="" /> :
				label === 'Delete' ? <img src={DeleteIcon} alt="" /> :
				label === 'Cancel' ? <img src={CancelIcon} alt="" /> : ''
			}
		</button>
	)
}

export default Button
