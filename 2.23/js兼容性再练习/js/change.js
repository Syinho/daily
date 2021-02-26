function change() {
    const oDiv = global.document.getElementById('app1');
    oDiv.addEventListener('click', (ev) => {
        ev.target.style.backgroundColor = 'red';
    }, false);

    const np = new Promise(resolve => {
        setTimeout(() => {
            console.log('promise调用成功');
            resolve();
        }, 1000);
    })
    console.log(np);

}

module.exports = change;