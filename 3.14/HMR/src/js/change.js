function change() {
  const oDiv = global.document.getElementById('app1');
  let count = 0;
  oDiv.addEventListener('click', () => {
    if (count % 2 === 0) {
      oDiv.style.backgroundColor = '#397769';
      count++;
    } else {
      oDiv.style.backgroundColor = 'indianred';
      count--;
    }
  }, false);
  // eslint-disable-next-line
    console.log('change.js被调用');
}

export default change;
