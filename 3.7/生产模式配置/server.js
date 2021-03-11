const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('服务器已启动');
});
app.use(express.static('dist', {
    maxAge: 1000 * 3600
}));