let str = '海内存知己,天涯若比邻';
console.log(Buffer.byteLength(str, 'utf8')); //15
console.log(Buffer.from(str, 'utf8').length);