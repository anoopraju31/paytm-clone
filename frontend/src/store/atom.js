import { atom, selector } from 'recoil'
import { checkIsAuthenticated, getBalance } from '../helpers'

export const authAtom = atom({
	key: 'authAtom',
	default: selector({
		key: 'authSelector',
		get: async () => {
			return await checkIsAuthenticated()
		},
	}),
})

export const balanceAtom = atom({
	key: 'balanceAtom',
	default: selector({
		key: 'balanceSelector',
		get: async ({ get }) => {
			const auth = get(authAtom)

			if (!auth) return 0

			const balance = await getBalance()
			return balance
		},
	}),
})
