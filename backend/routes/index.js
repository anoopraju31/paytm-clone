const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
	res.json({ message: 'api v1 router index' })
})

module.exports = router
