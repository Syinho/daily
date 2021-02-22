function change() {
  const oDiv = global.document.getElementById('app1');
  oDiv.addEventListener('click', (ev) => {
    ev.target.style.backgroundColor = 'blue';
  }, false);
  // const pro = new Promise((resove, reject) => {
  //     setTimeout(() => {
  //         console.log('77777');
  //     }, 1000);
  // });
}

module.exports = change;