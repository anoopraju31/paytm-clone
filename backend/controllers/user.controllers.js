const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { signUpSchema } = require('../helpers/validations')
const User = require('../models/user.models')
require('dotenv').config()

const signUpController = async (req, res) => {
	const { username, firstName, lastName, password } = req.body
	const { success } = signUpSchema.safeParse(req.body)

	if (!success) return res.status(411).json({ message: 'Incorrect inputs' })

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

module.exports = {
	signUpController,
}
