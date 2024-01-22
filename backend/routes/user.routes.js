const { Router } = require('express')
const {
	signUpController,
	signInController,
} = require('../controllers/user.controllers')

const router = Router()

router.get('/', (req, res) => {
	res.json({ message: 'api v1 user router' })
})

router.post('/sign-up', signUpController)
router.post('/sign-in', signInController)

module.exports = router
