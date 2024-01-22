import { Link } from 'react-router-dom'
import Button from '../components/Button'
import InputField from '../components/InputField'

const SignUp = () => {
	return (
		<main className='min-h-screen flex justify-center items-center bg-orange-100'>
			<section className='w-full max-w-md p-10 rounded-xl shadow-xl font-mono'>
				<h1 className='text-3xl text-center mb-10 font-bold text-orange-800'>
					Sign Up
				</h1>

				<form className='mb-6 flex flex-col gap-5'>
					<InputField
						id='firstName'
						name='firstName'
						label='First Name'
						type='text'
						placeholder='Enter your first name'
					/>

					<InputField
						id='lastName'
						name='lastName'
						label='Last Name'
						type='text'
						placeholder='Enter your last name'
					/>

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

					<Button title='Sign Up' type='submit' />
				</form>

				<Link
					className='block text-center text-sm text-orange-700 py-2 px-6 hover:bg-orange-600 hover:text-orange-100 rounded-lg transition-colors duration-300 ease-in'
					to='/sign-in'>
					Already have an account?
				</Link>
			</section>
		</main>
	)
}

export default SignUp
