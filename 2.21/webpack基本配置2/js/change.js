function change() {
  const oDiv = global.document.getElementById('app1');
  oDiv.addEventListener('click', (ev) => {
    ev.target.style.backgroundColor = 'grey';
  }, false);
  const oA = global.document.getElementByid('xxx');
  console.log('xxx');
}

module.exports = change;
