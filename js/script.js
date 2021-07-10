window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_items'),
        menuItem = document.querySelectorAll('.menu_link'),
        burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('menu_items-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('burger_active');
            menu.classList.toggle('menu_items-active');
        })
    })
})