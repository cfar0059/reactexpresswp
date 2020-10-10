const express = require('express')
const sendFormRouter = express.Router()

sendFormRouter.post('/api/send', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

module.exports = sendFormRouter