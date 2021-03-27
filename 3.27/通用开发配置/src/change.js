function change() {
    const oDiv = global.document.getElementById('app1');
    let count = 0;
    oDiv.addEventListener('click', (ev) => {
        const event = ev;
        if (count % 2 == 0) {
            event.target.style.backgroundColor = '#f25610';
            count++;
        } else {
            event.target.style.backgroundColor = '#aa2589';
            count++;
        }
    }, false);
}

export default change;