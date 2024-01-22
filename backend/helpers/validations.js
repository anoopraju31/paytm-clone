const zod = require('zod')

const signUpSchema = zod.object({
	username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string(),
})

const signInSchema = zod.object({
	username: zod.string().email(),
	password: zod.string(),
})

module.exports = {
	signUpSchema,
	signInSchema,
}
