import { atom } from 'recoil'
import { checkIsAuthenticated } from '../helpers'

export const authAtom = atom({
	key: 'authAtom',
	default: checkIsAuthenticated(),
})
