import $ from './$';

function change() {
  const oDiv = $('app1');
  oDiv.addEventListener('click', (event) => {
    const ev = event;
    ev.target.style.backgroundColor = 'pink';
  }, false);
}

export default change;
