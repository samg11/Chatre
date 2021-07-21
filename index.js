const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

const server = require("http").createServer(app);

app.get('/', (req, res) => {
    res.send('Welcome to chatre');
});

server.listen(8080, () => {
    console.log('server is listening on port ' + PORT)
});