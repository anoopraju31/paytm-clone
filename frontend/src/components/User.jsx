import PropTypes from 'prop-types'
const User = ({ user }) => {
	return <div className='bg-indigo-900'>{user?.firstName}</div>
}

User.propTypes = {
	user: PropTypes.object,
}

export default User
