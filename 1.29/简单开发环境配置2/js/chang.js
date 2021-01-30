function change() {
    let divs = document.getElementsByTagName('div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', (ev) => {
            ev.target.style.backgroundColor = 'orange';
        }, false);
    }
}

module.exports = change;