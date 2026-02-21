

const select = document.querySelector('.header__select').addEventListener('click', function() {
item.classList.toggle('open');
});

const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger-icon');
const door  = document.querySelector('.header__burger-close');
const body = document.querySelector('body'); 

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('open');
    body.classList.add('lock');
});

door.addEventListener('click', () => {
    menu.classList.remove('active'); 
    burger.classList.remove('open');
    body.classList.remove('lock');
});
