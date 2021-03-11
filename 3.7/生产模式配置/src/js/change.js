function change() {
  const oDiv = global.document.getElementById('app1');
  oDiv.addEventListener('click', (ev) => {
    const event = ev;
    event.target.style.backgroundColor = 'red';
  }, false);

  const promise = new Promise(() => {
    setTimeout(() => {
      // eslint-disable-next-line
            console.log('promise调用成功');
    }, 1000);
  });
    // eslint-disable-next-line
    console.log(promise);
}

function sum(...args) {
  return args.reduce((acc, cur) => acc + cur, 0);
}

export {
  change,
  sum,
};
