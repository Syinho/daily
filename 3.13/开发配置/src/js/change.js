import $ from 'jquery';
// eslint-disable-next-line
console.log($);

function change() {
  const oDiv = global.document.getElementById('app1');
  oDiv.addEventListener('click', () => {
    oDiv.style.backgroundColor = '#094160';
  }, false);
  // eslint-disable-next-line
    console.log('函数change调用成功');
}

export default change;
