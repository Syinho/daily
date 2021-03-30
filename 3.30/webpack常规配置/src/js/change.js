import $ from 'jquery';

function change() {
    const oDiv = global.document.getElementById('app1');
    oDiv.addEventListener('click', function (ev) {
        const event = ev;
        event.target.style.backgroundColor = '#aaf256';
    })

    let promise = new Promise(() => {
        setTimeout(() => {
            // eslint-disable-next-line
            console.log('promise成功调用');
        }, 2000);
    });

    // eslint-disable-next-line
    console.log(promise);
    // eslint-disable-next-line
    console.log($);
}

export default change;