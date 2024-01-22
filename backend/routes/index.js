const { Router } = require('express')
const userRouter = require('./user.routes')
const router = Router()

router.get('/', (req, res) => {
	res.json({ message: 'api v1 router index' })
})

router.use('/user', userRouter)

module.exports = router