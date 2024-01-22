import { atom, selector } from 'recoil'
import { checkIsAuthenticated, getBalance, getUsers } from '../helpers'

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

export const searchUserAtom = atom({
	key: 'searchUserAtom',
	default: '',
})

export const usersListAtom = atom({
	key: 'usersListAtom',
	default: selector({
		key: 'userListSelector',
		get: async ({ get }) => {
			const username = get(searchUserAtom)
			const users = await getUsers(username)

			return users
		},
	}),
})
