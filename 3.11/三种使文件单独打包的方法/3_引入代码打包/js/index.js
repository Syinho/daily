function sum(...args) {
    return args.reduce((acc, cur) => acc + cur, 0);
}

const arr = [5, 7, 9];
console.log(sum(...arr));

import(/* webpackChunkName:'testChunk' */'./test')
    .then(({
        add,
        mul
    }) => {
        console.log('indexadd:' + add(3, 8));
        console.log('indexmul:' + mul(3, 7));
    })
    .catch(() => {
        console.log('获取test文件失败');
    });