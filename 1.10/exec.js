let reg = /\d{4}/g;
let str = 'uk2009i1548f45';
console.log(reg.exec(str));
console.log(reg.lastIndex);
console.log(reg.exec(str));
console.log(reg.lastIndex);
let reg1=/\S/;
let str1='月';
console.log(reg1.test(str1));