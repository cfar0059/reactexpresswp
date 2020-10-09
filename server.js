const express = require('express');

const app = express();

app.get('/api/customer', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Carl', lastName: 'Farrugia'},
        {id: 3, firstName: 'Naomi', lastName: 'Bonnici'},
    ]

    res.json(customers);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))