import $ from './$';

function change() {
  const oDiv = $('app1');
  oDiv.addEventListener('click', (ev) => {
    const event = ev;
    event.target.style.backgroundColor = 'red';
  });
  const promise = new Promise(() => {
    // eslint-disabled-next-line
    console.log('promise调用成功');
  });
    // eslint-disabled-next-line
  console.log(promise);
}

export default change;
