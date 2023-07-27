
const express = require('express')

const dotenv = require('dotenv').config()
const cors = require('cors');

const app = express()
app.use(cors());

const connectDB = require('./config/db')




const port = process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/contactForm', require('./routes/contactFormRoutes'))




app.listen(port, () => console.log(`Server started on port ${port}`))