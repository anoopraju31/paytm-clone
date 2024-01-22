const { Router } = require('express')
const { signUpController } = require('../controllers/user.controllers')

const router = Router()

router.get('/', (req, res) => {
	res.json({ message: 'api v1 user router' })
})

router.post('/sign-up', signUpController)

module.exports = router
