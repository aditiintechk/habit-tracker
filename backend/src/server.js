const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log('mongodb connected'))
	.catch((err) => console.error(err))

app.get('/api', (req, res) => {
	res.json({ message: 'my first mern app xxxx' })
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
