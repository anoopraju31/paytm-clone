import { useSetRecoilState } from 'recoil'
import Avatar from './Avatar'
import Button from './Button'
import { IoMdClose } from 'react-icons/io'
import InputField from './InputField'
import { isModelOpenAtom } from '../store/atom'

const SendModel = () => {
	const setIsModelOpen = useSetRecoilState(isModelOpenAtom)

	const handleClick = () => setIsModelOpen(false)

	return (
		<div className='fixed top-0 left-0 right-0 bottom-0 z-50 h-screen flex justify-center items-center backdrop-blur-sm bg-black/10'>
			<div className='relative w-full max-w-xs p-5 rounded-xl bg-orange-100 font-mono text-orange-800 flex flex-col gap-4'>
				<h2 className='text-center font-bold text-2xl'> Send Money </h2>
				<div className='flex gap-4 items-center rounded-lg'>
					<Avatar title='AR' />
					<h3 className='font-bold text-lg'> Anoop Raju </h3>
				</div>

				<form className='flex flex-col gap-4'>
					<InputField placeholder='Enter amount' />
					<Button title='Initiate Transfer' />
				</form>

				<div
					onClick={handleClick}
					className='absolute top-2 right-2 w-6 h-6 p-2 cursor-pointer flex justify-center items-center text-sm rounded-full bg-orange-50'>
					<div className='flex-shrink-0'>
						<IoMdClose />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SendModel
