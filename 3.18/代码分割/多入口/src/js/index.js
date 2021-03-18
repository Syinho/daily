// import change from './main';
import '../css/main.css';
// change();

function blue() {
    global.document.getElementById('blue').addEventListener('click', () => {
        global.document.body.style.backgroundColor = 'blue';
    }, false);
}
blue();