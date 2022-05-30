const mn = document.getElementById('main');
mn.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = "Haala is the champion";
document.body.append(newHeader);