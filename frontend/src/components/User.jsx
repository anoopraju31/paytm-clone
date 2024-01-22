import PropTypes from 'prop-types'
import Button from './Button'
import Avatar from './Avatar'

const User = ({ user }) => {
	const { firstName, lastName } = user
	const avatar = `${firstName[0]}${lastName[0]}`

	return (
		<div className='group p-2 flex justify-between items-center gap-6 rounded-lg hover:bg-orange-200 transition-colors duration-500 ease-in-out'>
			<div className='w-full flex items-center gap-6'>
				<Avatar title={avatar} />

				<h4 className='text-lg font-mono font-bold whitespace-nowrap text-orange-800 group-hover:text-orange-700 capitalize'>
					{firstName} {lastName}
				</h4>
			</div>

			<Button
				title='Send Money'
				style='! w-fit whitespace-nowrap group-hover:bg-orange-400'
			/>
		</div>
	)
}

User.propTypes = {
	user: PropTypes.object,
}

export default User
