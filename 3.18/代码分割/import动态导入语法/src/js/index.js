import '../css/main.css';

import( /* webpackChunkName:'test' */ './main').then(({
    change
}) => {
    change();
}).catch(() => {
    // eslint-dsiable-next-line
    console.log('文件加载失败');
})

function blue() {
    global.document.getElementById('blue').addEventListener('click', () => {
        global.document.body.style.backgroundColor = 'blue';
    }, false);
}
blue();