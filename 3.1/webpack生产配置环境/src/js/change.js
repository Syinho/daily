import $ from './$';

function change() {
  const oDiv = $('app1');
  oDiv.addEventListener('click', (event) => {
    const ev = event;
    ev.target.style.backgroundColor = 'red';
  }, false);
}

export default change;
