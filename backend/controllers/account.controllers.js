const Account = require('../models/acount.models')

const balanceController = async (req, res) => {
	const account = await Account.findOne({ userId: req.userId })

	if (!account) return res.status(402).json({ message: 'Account not found' })

	res.json({ balance: account.balance })
}

module.exports = {
	balanceController,
}