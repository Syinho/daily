function change() {
    const oBtn = global.document.getElementsByTagName('button')[0];
    oBtn.addEventListener('click', () => {
        global.document.body.style.backgroundColor = '#29569a';
    }, false);
}

export default change;