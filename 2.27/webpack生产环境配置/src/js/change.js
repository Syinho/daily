function change() {
  const oDiv = global.document.getElementById('app1');
  oDiv.addEventListener('click', () => {
    oDiv.style.backgroundColor = 'red';
  }, false);
  const promise = new Promise((() => {
    setTimeout(() => {
      oDiv.style.background = 'green';
    }, 1000);
  }));
}

export default change;
