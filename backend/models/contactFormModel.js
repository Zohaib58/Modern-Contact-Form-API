const mongoose = require('mongoose')

const contactFormSchema = mongoose.Schema
(
    {
        name: {
            type: String,
            required: [true, "Enter Name"],
           
        },
        email: {
            type: String,
            required: [false, "Enter email"],
        },
        phone: {
            type: String,
            required: [true, "Enter phone"]
        },
        address: {
            type: String,
            required: [true, "Enter address"]
        },
        
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('ContactForm', contactFormSchema)