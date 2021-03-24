function change() {
    let count = 0;
    const oDiv = global.document.getElementById('app1');
    oDiv.addEventListener('click', (ev) => {
        const event = ev;
        if (count % 2 == 0) {
            event.target.style.backgroundColor = '#25ab69';
            count++;
        } else {
            event.target.style.backgroundColor = '#94bb13';
            count++;
        }
    }, false);
}

export default change;