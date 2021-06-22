const express = require('express');
const fs = require('fs');
const app = express();

app.get('/books/:id', (req, res) => {

})
});

app.listen(3000, () => {
    console.log('server is running at localhost:3000');
});