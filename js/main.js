// array of project objects

const project1 = {
  title: 'Keeping track of hundreds of components',
  id: 1,
  imageSrc:
    './assets/Desktop Snapshoot Portfolio.png',
  technologies: ['html', 'CSS', 'Javascript', 'Bootstrap'],
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  liveLink: 'https://myaserkhan.github.io/Portfolio/',
  githubLink: 'https://github.com/MYaserKhan/Portfolio',
};
const project2 = {
  title: 'Keeping track of hundreds of components',
  id: 2,
  imageSrc:
    './assets/Desktop Snapshoot Portfolio.png',
  technologies: ['html', 'SCSS', 'Javascript', 'React'],
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  liveLink: 'https://myaserkhan.github.io/Portfolio/',
  githubLink: 'https://github.com/MYaserKhan/Portfolio',
};
const project3 = {
  title: 'Keeping track of hundreds of components',
  id: 3,
  imageSrc:
    './assets/Desktop Snapshoot Portfolio.png',
  technologies: ['Ruby', 'Jekyll', 'SCSS', 'Javascript'],
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  liveLink: 'https://myaserkhan.github.io/Portfolio/',
  githubLink: 'https://github.com/MYaserKhan/Portfolio',
};
const project4 = {
  title: 'Keeping track of hundreds of components',
  id: 4,
  imageSrc:
    './assets/Desktop Snapshoot Portfolio.png',
  technologies: ['Bootstrap', 'css3', 'Ruby on Rails', 'Ruby'],
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  liveLink: 'https://myaserkhan.github.io/Portfolio/',
  githubLink: 'https://github.com/MYaserKhan/Portfolio',
};
const project5 = {
  title: 'Keeping track of hundreds of components',
  id: 5,
  imageSrc:
    './assets/Desktop Snapshoot Portfolio.png',
  technologies: ['html', 'css', 'React', 'Ruby on Rails', 'Ruby'],
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  liveLink: 'https://myaserkhan.github.io/Portfolio/',
  githubLink: 'https://github.com/MYaserKhan/Portfolio',
};
const project6 = {
  title: 'Keeping track of hundreds of components',
  id: 6,
  imageSrc:
    './assets/Desktop Snapshoot Portfolio.png',
  technologies: ['html', 'css', 'Javascript', 'Webpack'],
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  liveLink: 'https://myaserkhan.github.io/Portfolio/',
  githubLink: 'https://github.com/MYaserKhan/Portfolio',
};
const projects = [project1, project2, project3, project4, project5, project6];

// Target open and close triggers in html

const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const openElems = Array.from(openEls);
const closeElems = Array.from(closeEls);
const isVisible = 'is-visible';
const navLinks = document.querySelectorAll('.web-header-link');

// Create main page work section html elements

// Open modal
openElems.forEach((e) => {
  e.addEventListener('click', function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    document.body.style.overflow = 'hidden';
  });
});
// Close modal
closeElems.forEach((e) => {
  e.addEventListener('click', function () {
    this.parentElement.parentElement.classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  });
});

// add event listener on click outside modal to close modal and enable scroll
document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  }
});

// add event listener on a tags to close modal, enable scroll, and go to section ID
navLinks.forEach((elem) => {
  elem.addEventListener('click', () => {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  });
});
// add event listener on a tags to close modal, enable scroll, and go to section ID
navLinks.forEach((elem) => {
  elem.addEventListener('click', () => {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.style.overflow = 'auto';
  });
});