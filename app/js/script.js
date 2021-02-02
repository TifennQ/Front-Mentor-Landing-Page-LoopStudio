let buttonToggleMenu = document.querySelector("#buttonHamburger");
let headerMenu = document.querySelector(".header__mobile-menu");
let burgerMenuImg = document.querySelector("#burgerMenuImg");
let body = document.querySelector("body");
let overlay = document.querySelector(".has-fade");

buttonToggleMenu.addEventListener('click', function() {
    if(headerMenu.classList.contains('open')) {
        body.classList.remove('noscroll');
        headerMenu.classList.remove('open');
        burgerMenuImg.setAttribute('src', '/images/icon-hamburger.svg');
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
    }
    else {
        body.classList.add('noscroll');
        headerMenu.classList.add('open');
        burgerMenuImg.setAttribute('src', '/images/icon-close.svg');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
    }
})
