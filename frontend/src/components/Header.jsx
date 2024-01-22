import { useRecoilState } from 'recoil'
import { memo, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegCircleUser } from 'react-icons/fa6'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import { authAtom } from '../store/atom'

const Header = () => {
	const [showUserMenu, setShowUserMenu] = useState(false)
	const [auth, setAuth] = useRecoilState(authAtom)

	const toggleUserMenu = useCallback(() => setShowUserMenu((prev) => !prev), [])
	const logout = useCallback(() => {
		localStorage.setItem('token', null)
		setAuth(false)
	}, [setAuth])

	return (
		<header className='fixed top-0 left-0 w-full p-5 md:px-10 font-mono backdrop-blur-lg flex justify-between items-center'>
			<div className='text-xl md:text-2xl font-bold text-orange-900'>
				<Link to='/'> PayTM </Link>
			</div>

			{auth && (
				<div
					onClick={toggleUserMenu}
					className='text-2xl relative text-orange-900'>
					<FaRegCircleUser />
					{showUserMenu && <UserMenu logout={logout} />}
				</div>
			)}
		</header>
	)
}

const UserMenu = memo(({ logout }) => {
	return (
		<div className='p-2 flex justify-center items-center bg-orange-300 rounded-lg absolute top-12 right-0'>
			<Button title='Logout' handleClick={logout} />
		</div>
	)
})

UserMenu.propTypes = {
	logout: PropTypes.func,
}

UserMenu.displayName = 'UserMenu'

export default Header
