const fs = require('fs');
console.log(fs.existsSync('./1.txt'));

// const data=fs.readdirSync('../jquery九宫格/img');
// // let reg=/^'(\S+\.(jpg|png|gif)?)'$/gi;
// // let str='';
// // for(let i=0;i<data.length;i++){
// //     str+=
// // }

// fs.writeFileSync('./1.txt',data);
if (!fs.existsSync('./1.txt')) {
    const data = fs.readdirSync('../jquery九宫格/img');
    let reg = /^(\S+\.(jpg|png|gif)?)$/gi;node 
    let str = '';
    for (let i = 0; i < data.length; i++) {
        str += `"${data[i]}",`
    }

    if (str.substring(str.length - 1) == ',') {
        str = str.substring(0, str.length - 1);
    }
    fs.writeFileSync('./1.txt', str);
} else {
    fs.unlinkSync('./1.txt');
    const data = fs.readdirSync('../jquery九宫格/img');
    let reg = /^(\S+\.(jpg|png|gif)?)$/gi;
    let str = '';
    for (let i = 0; i < data.length; i++) {
        str += `"${data[i]}",`
    }

    if (str.substring(str.length - 1) == ',') {
        str = str.substring(0, str.length - 1);
    }
    fs.writeFileSync('./1.txt', str);
}