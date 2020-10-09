const express = require('express')
const formRouter = express.Router()
const axios = require('axios')

formRouter.get('/api/forms', (req, res) => {
    try {
        axios.get(`https://raketech.herokuapp.com/wp-json/wp/v2/forms/12`)
            .then(response => {
                res.send(response.data)
            })
    } catch (err) {
        //If error is caught handle error response accordingly
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.request) {
            console.log(err.request)
        } else {
            console.error('Error', err.message)
        }
    }
})

module.exports = formRouter