// import change from './main';
import '../css/main.css';
// change();
import $ from 'jquery';

// eslint-disable-next-line
console.log($);

function blue() {
    global.document.getElementById('blue').addEventListener('click', () => {
        global.document.body.style.backgroundColor = 'blue';
    }, false);
}
blue();