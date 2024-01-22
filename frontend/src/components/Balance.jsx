import { useRecoilValueLoadable } from 'recoil'
import { balanceAtom } from '../store/atom'

const Balance = () => {
	const balance = useRecoilValueLoadable(balanceAtom)
	if (balance.state !== 'hasValue') return null
	return (
		<section className='border-t border-orange-50 p-10 flex justify-center items-center'>
			<div className='w-full max-w-4xl'>
				<h2 className='font-mono font-bold text-xl text-orange-800'>
					Your Balance: {balance.contents}
				</h2>
			</div>
		</section>
	)
}

export default Balance
