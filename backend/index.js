const express = require('express')
const mainRoutes = require('./routes/index')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5500

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to paytm server' })
})

app.use('/api/v1', mainRoutes)

app.listen(PORT, () => {
	console.log(`server started at port ${PORT}.`)
})
