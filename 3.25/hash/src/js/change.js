function change() {
    const oBtn = global.document.getElementById('btn');
    let count = 0;
    oBtn.addEventListener('click', () => {
        if (count % 2 == 0) {
            global.document.body.style.backgroundColor = '#ff2588';
            count++;
        } else {
            global.document.body.style.backgroundColor = '#1589aa';
            count++;
        }
    }, false);
}

change();