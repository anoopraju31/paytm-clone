import { useRecoilValueLoadable } from 'recoil'
import { usersListAtom } from '../store/atom'
import User from './User'

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
		<>
			{users.state === 'hasValue' &&
				users.contents.map((user) => <User key={user?._id} user={user} />)}
		</>
	)
}

export default UsersList
