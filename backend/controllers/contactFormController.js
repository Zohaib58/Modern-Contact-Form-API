const asyncHandler = require('express-async-handler')
const ContactForm = require("../models/contactFormModel")


const submitInfo = asyncHandler(async(req, res) => {
    const {name, email, phone, address} = req.body

    if (!name || !email || !phone || !address) {
        res.status(400)
        throw new Error('Please add all fields')
    } 

    const submittedInfo = await ContactForm.create ({
       name,
       email,
       phone,
       address
    })

    console.log(submittedInfo)
    if (submittedInfo) {
        res.status(201).json(
            submittedInfo.name,
            "alalal",
            submittedInfo.email,
            submittedInfo.phone,
            submittedInfo.address
        )
    }
    else {
        res.status(400)
        throw new Error('Invalid data')
    }
})


module.exports = {
    submitInfo
}