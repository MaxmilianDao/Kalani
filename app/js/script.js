const button = document.getElementById('button');
const list = document.getElementById('list');

list.style.display = 'none';

button.addEventListener('click', (event) => {
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
});