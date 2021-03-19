import $ from 'jquery';

function change() {
    // eslint-disable-next-line
    console.log($);
    let count = 0;
    global.document.getElementById('app1').addEventListener('click', (ev) => {
        const event = ev;
        if (count % 2 == 0) {
            event.target.style.backgroundColor = "#ac1568";
            count++;
        } else {
            event.target.style.backgroundColor = '#f5e468';
            count++;
        }
    }, false);
}

export default change;