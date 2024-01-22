const bcrypt = require('bcrypt')
const {
	signUpSchema,
	signInSchema,
	updateSchema,
} = require('../helpers/validations')
const User = require('../models/user.models')
const Account = require('../models/acount.models')
const { generateToken } = require('../helpers/jwt')
require('dotenv').config()

const signUpController = async (req, res) => {
	const { username, firstName, lastName, password } = req.body
	const { error } = signUpSchema.safeParse(req.body)

	if (error)
		return res.status(411).json({
			status: 'error',
			message: error.issues[0].message,
		})

	const existingUser = await User.findOne({ username })

	if (existingUser)
		return res.status(411).json({ message: 'Email already taken' })

	const saltRounds = parseInt(process.env.SALT)
	const salt = await bcrypt.genSalt(saltRounds)
	const hashedPassword = await bcrypt.hash(password, salt)
	const user = await User.create({
		username,
		password: hashedPassword,
		firstName,
		lastName,
	})
	const userId = user._id

	await Account.create({
		userId,
		balance: 1 + Math.ceil(Math.random() * 1000000),
	})

	const token = generateToken(userId)

	res.json({
		message: 'Successfully signed up',
		id: userId,
		username,
		firstName,
		lastName,
		token,
		auth: true,
	})
}

const signInController = async (req, res) => {
	const { username, password } = req.body
	const { error } = signInSchema.safeParse(req.body)

	if (error)
		return res.status(411).json({
			status: 'error',
			message: error.issues[0].message,
		})

	const user = await User.findOne({ username }).select('+password')

	if (!user) return res.status(411).json({ message: 'Email not found' })

	const { _id: id, firstName, lastName } = user
	const isValidPassword = await bcrypt.compare(password, user.password)

	if (!isValidPassword)
		return res.status(411).json({ message: 'Incorrect password' })

	const token = generateToken(user._id)

	res.json({
		message: 'User successfully login',
		id,
		username,
		firstName,
		lastName,
		token,
		auth: true,
	})
}

const updateController = async (req, res) => {
	const { error } = updateSchema.safeParse(req.body)

	if (error)
		return res.status(411).json({
			status: 'error',
			message: error.issues[0].message,
		})

	const user = await User.updateOne({ _id: req.userId }, req.body)
	console.log(user)

	res.json({ message: 'Updated successfully' })
}

const bulkUserController = async (req, res) => {
	const filter = req.query.filter || ''
	const filteredUsers = await User.find({
		$or: [{ firstName: { $regex: filter } }, { lastName: { $regex: filter } }],
	})
	const users = filteredUsers.map(({ username, firstName, lastName, _id }) => ({
		username,
		firstName,
		lastName,
		_id,
	}))

	res.json({ users })
}

const userController = async (req, res) => {
	const user = await User.findOne({ _id: req.userId })
	res.json(user)
}

module.exports = {
	signUpController,
	signInController,
	updateController,
	bulkUserController,
	userController,
}
