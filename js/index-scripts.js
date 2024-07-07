// HEAD COMPONENTS
document.getElementById('navToggle').addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    console.log('nav-open')
});

document.getElementById('navLink-home').addEventListener('click', () => {
    document.body.classList.remove('nav-open')
    console.log('nav-close-home')
});

document.getElementById('navLink-services').addEventListener('click', () => {
    document.body.classList.remove('nav-open')
    console.log('nav-close-services')
});

document.getElementById('navLink-about').addEventListener('click', () => {
    document.body.classList.remove('nav-open')
    console.log('nav-close-about')
});

document.getElementById('navLink-work').addEventListener('click', () => {
    document.body.classList.remove('nav-open')
    console.log('nav-close-work')
});

// INTRODUCTION

const nameId = document.getElementById('name');
nameId.addEventListener('click', () => {
    console.log('click-name');
    nameId.classList.remove('animated', 'slideInLeft');
    nameId.classList.add('animated', 'rubberBand')
    nameId.addEventListener('animationend', () => { nameId.classList.remove('animated', 'rubberBand') })
});