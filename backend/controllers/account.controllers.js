const mongoose = require('mongoose')
const Account = require('../models/acount.models')

const balanceController = async (req, res) => {
	const account = await Account.findOne({ userId: req.userId })

	if (!account) return res.status(402).json({ message: 'Account not found' })

	res.json({ balance: account.balance })
}

const transferController = async (req, res) => {
	const userId = req.userId
	const { amount, to } = req.body
	const session = await mongoose.startSession()

	// Fetch the accounts within the transaction
	session.startTransaction()

	const fromAccount = await Account.findOne({ userId }).session(session)

	// Abort Transaction if From account not found or has insufficient balance
	if (!fromAccount || fromAccount.balance < amount) {
		await session.abortTransaction()
		return res.status(400).json({ message: 'Insufficient balance' })
	}

	const toAccount = await Account.findOne({ userId: to }).session(session)

	// Abort Transaction if To account not found
	if (!toAccount) {
		await session.abortTransaction()
		return res.status(400).json({ message: 'Invalid account' })
	}

	// Perform the transfer
	await Account.updateOne({ userId }, { $inc: { balance: -amount } }).session(
		session,
	)
	await Account.updateOne(
		{ userId: to },
		{ $inc: { balance: amount } },
	).session(session)

	// Perform the transaction
	await session.commitTransaction()

	res.json({ message: 'Transfer fund successfully' })
}

module.exports = {
	balanceController,
	transferController,
}
