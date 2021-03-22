import $ from 'jquery';

function change() {
    console.log($);
    const oDiv = global.document.getElementById('btn');
    let count = 0;
    oDiv.addEventListener('click', () => {
        if (count % 2 == 0) {
            global.document.body.style.backgroundColor = '#25ff87';
            count++;
        } else {
            global.document.body.style.backgroundColor = '#f1ab58';
            count++;
        }
    })
}

export default change;