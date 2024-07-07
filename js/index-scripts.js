let i = 0
setInterval(() => {
  const _loading = document.getElementById('loading')
  const loadingimg = document.getElementById('loading__img')
  if (document.readyState === 'loading') {
    _loading.classList.add('__loading')
    loadingimg.classList.add('loading__img')
    loadingimg.classList.remove('hide')
  }
  if (document.readyState === 'interactive') {
    _loading.classList.add('__loading')
    loadingimg.classList.add('loading__img')
    loadingimg.classList.remove('hide')
  }
  if (document.readyState === 'complete') {
    if (i === 50) {
      _loading.classList.remove('__loading')
      loadingimg.classList.remove('loading__img')
      loadingimg.classList.add('hide')
    }
    i++
  }
}, 100)

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
    nameId.classList.remove('animate__animated', 'animate__slideInLeft');
    nameId.classList.add('animate__animated', 'animate__rubberBand')
    nameId.addEventListener('animationend', () => { nameId.classList.remove('animate__animated', 'animate__rubberBand') })
});

const position = document.getElementById('position')
position.addEventListener('click', () => {
    position.classList.add('animate__animated', 'animate__wobble')
    void position.offsetWidth;
    position.addEventListener('animationend', () => { position.classList.remove('animate__animated', 'animate__wobble') })
})

// SERVICES
const sectiontitle = document.getElementById('sectiontitle')
sectiontitle.addEventListener('mouseover', () => {
    sectiontitle.classList.add('animate__animated', 'animate__swing')
    void sectiontitle.offsetWidth;
    sectiontitle.addEventListener('animationend', () => { sectiontitle.classList.remove('animate__animated', 'animate__swing') })
})

// ABOUT ME
const aboutTitle = document.getElementById('aboutTitle')
aboutTitle.addEventListener('mouseover', () => {
    aboutTitle.classList.add('animate__animated', 'animate__flash')
    void aboutTitle.offsetWidth;
    aboutTitle.addEventListener('animationend', () => { aboutTitle.classList.remove('animate__animated', 'animate__flash') })
})

aboutTitle.addEventListener('click', () => {
    aboutTitle.classList.add('animate__animated', 'animate__flash')
    void aboutTitle.offsetWidth;
    aboutTitle.addEventListener('animationend', () => { aboutTitle.classList.remove('animate__animated', 'animate__flash') })
})

const profileabout = document.getElementById('profileabout')
profileabout.addEventListener('click', () => {
    profileabout.classList.add('animate__animated', 'animate__tada')
    void profileabout.offsetWidth;
    profileabout.addEventListener('animationend', () => { profileabout.classList.remove('animate__animated', 'animate__tada') })
})

// WORK EXPERIENCE
const projects = document.getElementById('projects')
projects.addEventListener('click', () => {
    projects.classList.add('animate__animated', 'animate__jackInTheBox')
    void projects.offsetWidth;
    projects.addEventListener('animationend', () => { projects.classList.remove('animate__animated', 'animate__jackInTheBox') })
})



// PAGE SCROLLER
// Get the page scroller button
const pageScroller = document.getElementById('pageScroller');

// Show or hide the page scroller based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Adjust the scroll threshold as needed
        pageScroller.style.display = 'block';
    } else {
        pageScroller.style.display = 'none';
    }
});

// Smooth scroll to the top when the button is clicked
pageScroller.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});