import $ from 'jquery';

function change() {
    const oDiv = global.document.getElementById('app1');
    oDiv.addEventListener('click', (ev) => {
        ev.target.style.backgroundColor = "#009ee0";
    });
    // eslint-disable-next-line
    console.log('change函数调用');
    // eslint-disable-next-line
    console.log($);
}

export default change;