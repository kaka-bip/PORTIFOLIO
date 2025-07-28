// filepath: c:\Users\conta\OneDrive\Área de Trabalho\PORTIFOLIO\js\menu.js
const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.nav-links');
const icon = document.getElementById('icon-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    if(menu.classList.contains('active')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }else{
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});