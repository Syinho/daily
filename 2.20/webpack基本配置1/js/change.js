function change() {
    const oDiv = global.document.getElementById('app1');
    const imgSrc = require('../../../img/b08b-fxipenn0400574.jpg');
    const imgStyle = 'url(\''+imgSrc+'\') no-repeat / cover';
    oDiv.addEventListener('click', (ev) => {
        ev.target.style.background = imgStyle;
    }, false);
}
module.exports = change;