const fs = require('fs');
if (!fs.existsSync('./imgName.txt')) {
    const data = fs.readdirSync('./img');
    let reg = /\S+\.(jpg|png|gif)$/gi;
    let arr = data.filter((item, index, arr) => {
        return reg.test(item);
    });
    for (let i = 0; i < arr.length; i++) {
        arr[i] = "'" + arr[i] + "'";
    }
    fs.writeFileSync('./imgName.txt', arr.toString());
    setTimeout(() => {
        fs.unlinkSync('./imgName.txt')
    }, 60000);
} else {
    fs.unlinkSync('./imgName.txt');
    const data = fs.readdirSync('./img');
    let reg = /\S+\.(jpg|png|gif)$/gi;
    let arr = data.filter((item, index, arr) => {
        return reg.test(item);
    });
    for (let i = 0; i < arr.length; i++) {
        arr[i] = "'" + arr[i] + "'";
    }
    fs.writeFileSync('./imgName.txt', arr.toString());
    setTimeout(() => {
        fs.unlinkSync('./imgName.txt')
    }, 60000);
}