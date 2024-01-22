import { useRecoilValueLoadable } from 'recoil'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { authAtom } from '../store/atom'

const Home = () => {
	const auth = useRecoilValueLoadable(authAtom)
	const navigate = useNavigate()

	useEffect(() => {
		if (!auth.contents) navigate('/sign-in')
	}, [navigate, auth])

	return <div>Home</div>
}

export default Home
