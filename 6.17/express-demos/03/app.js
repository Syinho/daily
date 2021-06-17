const express = require('express');

const app = express();


app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log('请求参数', req.query);
    // res.statusCode = 201;
    // res.write('a');
    // res.write('b');
    // res.write('c');
    // res.end();
    // res.send('hello world');
    res.status(201).send({
        foo: 'bar'
    });

});

app.post('/', (req, res) => {
    res.send('post /');
});

app.put('/user', (req, res) => {
    res.send('put user');
});

app.delete('/user', (req, res) => {
    res.send('delete user');
});

app.listen(3000, () => {
    console.log('server running at http://loaclhost:3000');
});