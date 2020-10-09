const express = require('express');

//Run Express
const app = express();
const port = 5000;

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Carl', lastName: 'Farrugia'},
        {id: 3, firstName: 'Naomi', lastName: 'Bonnici'},
    ]

    res.json(customers);
})

//Routes
const formRouter = require('./src/routes/form')
app.use('/', formRouter);

//listen on port number ->
app.listen(port, () => console.log(`Server started on port ${port}`))