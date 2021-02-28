function insert() {
  const oDiv1 = global.document.getElementById('app1');
  const oDiv2 = global.document.getElementById('app2');
  oDiv1.addEventListener('click', (ev) => {
    const aDiv = global.document.createElement('div');
    aDiv.style = 'width:150px;height:150px;background-color:red;';
    ev.target.parentNode.insertBefore(aDiv, oDiv2);
  }, false);
}

export {
  insert
};