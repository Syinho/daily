function change() {
    const oDiv = global.document.getElementById('btn');
    let count = 0;
    oDiv.addEventListener('click', () => {
        if (count % 2 == 0) {
            global.document.body.style.backgroundColor = '#7fa589';
            count++;
        } else {
            global.document.body.style.backgroundColor = 'sandybrown';
            count++;
        }
    }, false);
}


export default change;