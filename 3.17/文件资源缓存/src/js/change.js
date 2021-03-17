function change() {
    let count = 0;
    global.document.getElementById('btn').addEventListener('click', () => {
        if (count % 2 == 0) {
            global.document.body.style.backgroundColor = '#75aa84';
            count++;
        } else {
            global.document.body.style.backgroundColor = "indianred";
            count++;
        }
    })
}
export default change;