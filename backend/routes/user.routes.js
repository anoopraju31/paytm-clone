const { Router } = require('express')
const {
	signUpController,
	signInController,
	updateController,
	bulkUserController,
} = require('../controllers/user.controllers')
const { authMiddleware } = require('../middlewares/auth.middlewares')

const router = Router()

router.get('/', (req, res) => {
	res.json({ message: 'api v1 user router' })
})

router.post('/sign-up', signUpController)
router.post('/sign-in', signInController)
router.put('/', authMiddleware, updateController)
router.get('/bulk', authMiddleware, bulkUserController)
module.exports = router
