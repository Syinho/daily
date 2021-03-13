const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('服务器启动成功');
});

app.use(express.static('dist', {
    maxAge: 1000 * 3600
}));