const nodemailer = require('nodemailer');
require("dotenv").config({ path: "../../.env" })

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'dustin10@ethereal.email',
        pass: 'mRY7qmQwZ7K8x6JNbw'
    }
});

module.exports = transporter;