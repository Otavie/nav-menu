const hamburger = document.querySelector('.hamburger');
const hamburgerLines = document.querySelector('.hamburger-lines');
const nav = document.querySelector('.nav');
const minScreen = window.innerWidth;

hamburger.addEventListener('click', (event) => {
    event.preventDefault();
    hamburgerLines.classList.toggle('show');
    nav.classList.toggle('show');
})

function resizeScreen(event) {
    event.preventDefault();
    const minScreen = 900; 
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;

    if (screenWidth >= minScreen) {
        hamburgerLines.classList.remove('show');
        nav.classList.remove('show');
    }
}

window.addEventListener('resize', resizeScreen);