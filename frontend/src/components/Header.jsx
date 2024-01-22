import { useRecoilStateLoadable } from 'recoil'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegCircleUser } from 'react-icons/fa6'
import Button from '../components/Button'
import { authAtom } from '../store/atom'

const Header = () => {
	return (
		<header className='fixed top-0 left-0 w-full p-5 md:px-10 font-mono backdrop-blur-lg flex justify-between items-center'>
			<div className='text-xl md:text-2xl font-bold text-orange-900'>
				<Link to='/'> PayTM </Link>
			</div>

			<UserProfile />
		</header>
	)
}

const UserProfile = () => {
	const [showUserMenu, setShowUserMenu] = useState(false)
	const [auth, setAuth] = useRecoilStateLoadable(authAtom)

	const toggleUserMenu = useCallback(() => setShowUserMenu((prev) => !prev), [])
	const logout = () => {
		localStorage.removeItem('token')
		setAuth(null)
	}

	if (auth.state !== 'hasValue' || !auth.contents) return null

	return (
		<div className='flex gap-4 items-center text-orange-900'>
			<p> Hello, {auth.contents.firstName} </p>
			<div onClick={toggleUserMenu} className='text-2xl relative '>
				<FaRegCircleUser />
				{showUserMenu ? (
					<div className='p-2 flex justify-center items-center bg-orange-300 rounded-lg absolute top-12 right-0'>
						<Button title='Logout' handleClick={logout} />
					</div>
				) : null}
			</div>
		</div>
	)
}

export default Header
