const express = require('express')
const router = express.Router()

const {submitInfo} = require('../controllers/contactFormController')

router.post('/create', submitInfo)

module.exports = router