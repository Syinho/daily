function change() {
    const oDiv = global.document.getElementById('app1');
    oDiv.addEventListener('click', (ev) => {
        ev.target.style.backgroundColor = 'grey'
    }, false);
}

module.exports = change;