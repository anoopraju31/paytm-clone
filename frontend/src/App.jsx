import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
