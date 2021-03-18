function change() {
    let count = 0;
    global.document.getElementById('btn').addEventListener('click', () => {
        if (count % 2 == 0) {
            global.document.body.style.backgroundColor = '#6f15a4';
            count++;
        } else {
            global.document.body.style.backgroundColor = '#c157d5';
            count++;
        }
    }, false);
}

export default change;