const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
	res.json({ message: 'api v1 user router' })
})

module.exports = router
