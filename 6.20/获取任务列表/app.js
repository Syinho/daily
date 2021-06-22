const express = require('express');
const fs = require('fs');

const app = express();

app.get('/book', (req, res) => {
    // console.log(req.params);
    // let id = req.params.id;
    // console.log(id);

    // let name = req.params.name;
    fs.readFile('./library.json', (err, data) => {
        if (err) throw err;
        // let book = data.books.filter((item, index, arr) => {
        //     if (item.id == id) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // });
        // if (book) {
        //     res.status(200).json(book);
        // } else {
        //     res.status(502).send('查询失败');
        // }
        // fs.readFile('./library.json', (err, data) => {
        //     if (err) {
        //         throw err;
        //         res.status(400).send('服务器错误')
        //     };
        //     console.log(data);
        //     res.status(200).send(JSON.stringify(data));
        // });

        fs.readFile('./poetry.txt', (err, data) => {
            if (err) throw err;
            else res.status(200).send(data);
        });
    });
});

app.listen(3000, (err) => {
    if (err) throw err;
    else console.log('server is running at localhost:127.0.0.1');
});