const express = require('express');
const server = express();
server.listen(3000, () => {
    console.log('服务器创建成功');
});

server.use(express.static('./dist', {
    maxAge: 1000 * 3600
}));