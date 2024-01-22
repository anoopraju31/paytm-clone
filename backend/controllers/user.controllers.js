const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {
	signUpSchema,
	signInSchema,
	updateSchema,
} = require('../helpers/validations')
const User = require('../models/user.models')
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
	const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

	res.json({ message: 'Successfully signed up', token })
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

	const isValidPassword = await bcrypt.compare(password, user.password)

	if (!isValidPassword)
		return res.status(411).json({ message: 'Incorrect password' })

	const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

	res.json({ message: 'User successfully login', token })
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

module.exports = {
	signUpController,
	signInController,
	updateController,
}
