const express = require('express');
const { createUser } = require('./db');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

const server = require("http").createServer(app);

app.get('/', (req, res) => {
    createUser('samg11', 'hello');
    res.send('Welcome to chatre');
});

server.listen(8080, () => {
    console.log('server is listening on port ' + PORT)
});