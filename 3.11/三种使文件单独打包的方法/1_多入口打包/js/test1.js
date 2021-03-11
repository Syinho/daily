function sum(...args) {
    return args.reduce((acc, cur) => acc + cur, 0);
}

const arr = [1, 5, 7];
console.log('sum:' + sum(...arr));

export default sum;