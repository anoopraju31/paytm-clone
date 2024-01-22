import { useRecoilValueLoadable } from 'recoil'
import { balanceAtom } from '../store/atom'

const Balance = () => {
	const balance = useRecoilValueLoadable(balanceAtom)
	if (balance.state !== 'hasValue') return null
	return (
		<section className='border-t border-orange-800 p-10'>
			<h2 className='font-mono font-bold text-xl text-orange-800'>
				Your Balance: {balance.contents}
			</h2>
		</section>
	)
}

export default Balance
