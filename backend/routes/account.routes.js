const { Router } = require('express')
const { authMiddleware } = require('../middlewares/auth.middlewares')
const { balanceController } = require('../controllers/account.controllers')

const router = Router()

router.get('/balance', authMiddleware, balanceController)

module.exports = router
