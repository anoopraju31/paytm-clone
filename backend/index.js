const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5500

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to paytm server' })
})

app.listen(PORT, () => {
	console.log(`server started at port ${PORT}.`)
})
