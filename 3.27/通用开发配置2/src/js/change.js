function change() {
    const oBtn = global.document.getElementById('btn');
    oBtn.addEventListener('click', () => {
        global.document.body.style.backgroundColor = '#15f269';
    }, false);
}

export default change;