const express = require('express');
const server = express();
server.listen(3000, () => {
    console.log('创建服务器成功');
});
server.