function change() {
    const oDiv = global.document.getElementById('app1');
    oDiv.addEventListener('click', (ev) => {
        ev.target.style.backgroundColor = "pink";
    }, false);
}
module.exports = change;