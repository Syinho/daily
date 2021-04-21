import * as reset from './reset.js';
window.onload = function () {
    const oBtn = reset.$('btn');
    oBtn.addEventListener('click', function (e) {
        e.target.style.backgroundColor = "red";
    }, false);
}