const express = require('express')
const sendFormRouter = express.Router()
const transporter = require('../../config');

/**
 * Route /api/send used to send Form Data to designated email.
 */
sendFormRouter.post('/api/send', (req, res) => {
    try {
        const mailOptions = {
            from: req.body.email,
            to: 'dustin10@ethereal.email',
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