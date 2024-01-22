import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='fixed top-0 left-0 w-full p-5 md:px-10 font-mono backdrop-blur-lg'>
			<div className='text-xl md:text-2xl font-bold text-orange-900'>
				<Link to='/'> PayTM </Link>
			</div>
		</header>
	)
}

export default Header
