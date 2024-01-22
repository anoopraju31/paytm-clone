const zod = require('zod')

const signUpSchema = zod.object({
	username: zod.ZodString().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string(),
})

module.exports = {
	signUpSchema,
}
