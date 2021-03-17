function change() {
    const oDiv = global.document.getElementById('app1');
    let count = 0;
    oDiv.addEventListener('click', () => {
        if (count % 2 == 0) {
            oDiv.style.backgroundColor = "#256f1a";
            count++;
        } else if (count % 2 == 1) {
            oDiv.style.backgroundColor = "firebrick";
            count++;
        }
    }, false);

    const promise = new Promise(() => {
        setTimeout(() => {
            //  eslint-disable-next-line
            console.log('eslint调用成功');
        }, 1000);
    });
    console.log(promise);
}

export default change;