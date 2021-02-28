function insert() {
  const oDiv = global.document.getElementById('app2');
  oDiv.addEventListener('click', (ev) => {
    const aDiv = global.document.createElement('div');
    aDiv.style = 'width:150px;height:150px;background-color:green;';
    ev.target.parentNode.insertBefore(aDiv, oDiv);
  }, false);
}

export { insert };
