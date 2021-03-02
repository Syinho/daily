import $ from './$';

function change() {
  const oDiv = $('app1');
  oDiv.addEventListener('click', (event) => {
    const ev = event;
    ev.target.style.backgroundColor = 'orange';
  });
  const promise = new Promise(() => {
    setTimeout(() => {
      // eslint-disable-next-line
      console.log('promise执行成功');
    }, 1000);
  });
  // eslint-disable-next-line
  console.log(promise);
}
export default change;
