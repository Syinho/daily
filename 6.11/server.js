const express = require('express');
const server = express();
server.listen(3000, () => {
    console.log('成功创建服务器，监听3000窗口');
});