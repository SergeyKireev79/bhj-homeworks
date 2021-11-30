const button = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const links = document.querySelectorAll('a');

button.addEventListener('click', show);

function show() {

    if (list.className === 'dropdown__list') {
        list.className = 'dropdown__list dropdown__list_active';
    } else {
        list.className = 'dropdown__list';
    }
}

for (let link of links) {
    link.addEventListener('click', rename);
}

function rename(event) {
    event.preventDefault();
    button.textContent = event.target.textContent;
    list.className = 'dropdown__list';

}