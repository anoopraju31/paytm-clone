import { useRecoilValueLoadable } from 'recoil'
import { usersListAtom } from '../store/atom'

const UsersList = () => {
	const users = useRecoilValueLoadable(usersListAtom)

	if (users.state === 'loading')
		return (
			<div className='py-10 text-center text-lg text-orange-800 font-mono'>
				Loading...
			</div>
		)

	if (!users.contents.length)
		return (
			<div className='py-10 text-center text-lg text-orange-800 font-mono'>
				No user found!
			</div>
		)

	return (
		<div className='px-10'>
			{users.state === 'hasValue' &&
				users.contents.map((user) => (
					<p key={user?._id}> {user?.firstName} </p>
				))}
		</div>
	)
}

export default UsersList
