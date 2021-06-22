const express = require('express');
const server = express();

server.listen(3000, (err) => {
    if (err) throw err;
    else console.log('server is run at localhost:3000');
});