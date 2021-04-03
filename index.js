let buttonNav = document.getElementById('button__nav');
let navList = document.getElementById('nav__list');

function showNav() {
    if (navList.classList.contains('nav__show')) {
        navList.classList.remove('nav__show');
    } else {
        navList.classList.add('nav__show');
    }
}

buttonNav.addEventListener('click', showNav);

