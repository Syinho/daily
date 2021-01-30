function change() {
    let divs = document.getElementsByTagName('div');

    function ranCol() {
        return Math.floor(Math.random() * 256);
    }
    for (let i = 0; i < divs.length; i++) {

        divs[i].addEventListener('click', (ev) => {
            ev.target.style.backgroundColor = `rgb(${ranCol()},${ranCol()},${ranCol()})`
        }, false);
    }
}
module.exports = change;