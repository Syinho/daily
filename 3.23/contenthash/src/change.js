function change() {
    const oBtn = global.document.getElementById('btn');
    let count = 0;
    const oBody = global.document.body;
    oBtn.addEventListener('click', () => {
        if (count % 2 == 0) {
            oBody.style.backgroundColor = '#152f78';
            count++;
        } else {
            oBody.style.backgroundColor = '#aa1269';
            count++;
        }
    }, false);
}

export default change;