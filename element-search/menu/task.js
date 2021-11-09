const menu = document.getElementsByClassName('menu__link');

for (let i = 0; i < menu.length; i++) {
    menu[i].onclick = function() {


        const subMenu = this.parentElement.querySelector('.menu_sub');

        if (!subMenu) {
            return true;
        } else if (subMenu.className === 'menu menu_sub') {
            subMenu.className = 'menu menu_sub menu_active';
        } else {
            subMenu.className = 'menu menu_sub';
        }
        return false;
    }
}