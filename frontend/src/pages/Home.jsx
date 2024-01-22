import { useRecoilValueLoadable } from 'recoil'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { authAtom } from '../store/atom'
import Balance from '../components/Balance'

const Home = () => {
	const auth = useRecoilValueLoadable(authAtom)
	const navigate = useNavigate()

	useEffect(() => {
		if (!auth.contents) navigate('/sign-in')
	}, [navigate, auth])

	return (
		<main className='min-h-screen bg-orange-100 py-20 px-10'>
			<Balance />
		</main>
	)
}

export default Home
