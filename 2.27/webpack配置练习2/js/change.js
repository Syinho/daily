import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.promise.js';
import 'core-js/modules/web.timers.js';

function change() {
  const oDiv = global.document.getElementById('app1');
  oDiv.addEventListener('click', (ev) => {
    ev.target.style = 'background-color:brown';
  }, false);
  const promise = new Promise(((resolve) => {
    setTimeout(() => {
      console.log('promise执行');
    }, 1000);
  }));
  console.log(promise);
}

export { change };
