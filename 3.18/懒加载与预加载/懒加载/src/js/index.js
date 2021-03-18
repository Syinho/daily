function allGet(...args) {
    return args.reduce((acc, cur) => acc + cur, 0);
}

const arr = [3, 5, 7, 9];
// eslint-disable-next-line
console.log(allGet(...arr));

global.document.getElementById('btn').addEventListener('click', () => {
    import( /* webpackChunkName:'test',webpackPrefetch:true */ './main').then(({
        add,
        mul
    }) => {
        // eslint-disable-next-line
        console.log(add(3, 7));
        // eslint-disable-next-line
        console.log(mul(5, 5));
    })
}, false);