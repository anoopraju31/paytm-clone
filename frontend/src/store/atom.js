import { atom, selector } from 'recoil'
import { checkIsAuthenticated } from '../helpers'

export const authAtom = atom({
	key: 'authAtom',
	default: selector({
		key: 'authSelector',
		get: async () => {
			return await checkIsAuthenticated()
		},
	}),
})
