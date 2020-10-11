const path = require('path');
const express = require('express');
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

//Routes
const importformRouter = require('./src/routes/importForm')
const sendFormRouter = require('./src/routes/sendForm')
app.use('/', [importformRouter, sendFormRouter]);

const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
    console.log('server start on port 3030');
});