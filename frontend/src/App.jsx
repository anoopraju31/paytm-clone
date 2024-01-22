import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/about' element={<h1> About </h1>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
