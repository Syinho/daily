import $ from 'jquery';
console.log('$' + $);

function add(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

console.log('add:' + add(5, 7));
console.log('mul' + mul(5, 7));

import clg from './clg';
clg();

export {
    add,
    mul
};