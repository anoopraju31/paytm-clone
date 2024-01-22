import UserSearchForm from './UserSearchForm'

const UsersList = () => {
	return (
		<section className='px-10'>
			<h2 className='text-2xl text-orange-800 font-extrabold font-mono'>
				Users
			</h2>

			<UserSearchForm />
		</section>
	)
}

export default UsersList
