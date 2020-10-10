const express = require('express')
const sendFormRouter = express.Router()
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();

sendFormRouter.post('/api/send', (req, res) => {
    try {
        const mailOptions = {
            from: req.body.email,
            to: process.env.email,
            subject: req.body.subject,
            html: req.body.message
        };

        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Something went wrong. Try again later'
                });
            } else {
                res.send({
                    success: true,
                    message: 'Thanks for contacting us. We will get back to you shortly'
                });
            }
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later'
        });
    }
});

module.exports = sendFormRouter