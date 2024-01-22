import { Link } from 'react-router-dom'
import Button from '../components/Button'
import InputField from '../components/InputField'

const SignIn = () => {
	return (
		<main className='min-h-screen flex justify-center items-center bg-orange-100'>
			<section className='w-full max-w-md p-10 rounded-xl shadow-xl font-mono'>
				<h1 className='text-3xl text-center mb-10 font-bold text-orange-800'>
					Sign In
				</h1>

				<form className='mb-6 flex flex-col gap-5'>
					<InputField
						id='email'
						name='email'
						label='Email'
						type='email'
						placeholder='Enter your email'
					/>

					<InputField
						id='password'
						name='password'
						label='Password'
						type='password'
						placeholder='Enter your password'
					/>

					<Button title='Sign In' type='submit' />
				</form>

				<div className='text-center text-sm text-orange-700 py-2 px-6 hover:bg-orange-600 hover:text-orange-100 rounded-lg transition-colors duration-300 ease-in'>
					<Link to='/sign-in' className=''>
						{' '}
						Need an account?{' '}
					</Link>
				</div>
			</section>
		</main>
	)
}

export default SignIn
