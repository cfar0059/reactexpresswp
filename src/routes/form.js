const express = require('express')
const formRouter = express.Router()
const axios = require('axios')

formRouter.get('', async (req, res) => {
    try {
        const formAPI = await axios.get(`https://raketech.herokuapp.com/wp-json/wp/v2/posts/`)
        res.json(formAPI);
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