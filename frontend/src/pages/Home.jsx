import { useRecoilValue } from 'recoil'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { authAtom } from '../store/atom'

const Home = () => {
	const auth = useRecoilValue(authAtom)
	const navigate = useNavigate()

	useEffect(() => {
		if (!auth) navigate('/sign-in')
	}, [navigate, auth])

	return <div>Home</div>
}

export default Home
