import $ from 'jquery';
console.log('$'+$);
// import * as obj from './test';
// console.log('indexadd'+obj.add(3,7));
// console.log('indexmul'+obj.mul(2,5));

import clg from './clg';
clg();

function sum(...args) {
    return args.reduce((acc, cur) => acc + cur, 0);
}

const arr = [1, 5, 7];
console.log('sum:' + sum(...arr));