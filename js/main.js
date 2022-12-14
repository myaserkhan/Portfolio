// array of project objects

const project1 = {
  title: 'Path to JavaScript Mastery web development',
  id: 1,
  imageSrc:
    './assets/jsmastery.png',
  technologies: ['html', 'CSS', 'Javascript', 'Bootstrap'],
  description:
    'Showcase your expertise to employers with exciting projects where you"ll build real-world applications and have your code reviewed by industry experts.',
  liveLink: 'https://myaserkhan.github.io/Path-to-JavaScript-Mastery/',
  githubLink: 'https://github.com/MYaserKhan/Path-to-JavaScript-Mastery',
};
const project2 = {
  title: 'SPACE TRAVELERS HUB',
  id: 2,
  imageSrc:
    './assets/travel.png',
  technologies: ['React', 'Redux'],
  description:
    'This educational project is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
  liveLink: 'https://strong-buttercream-e6fb08.netlify.app/',
  githubLink: 'https://github.com/myaserkhan/React-Redux-Space-Travelers-Hub',
};
const project3 = {
  title: 'POKEMON WEB APP',
  id: 3,
  imageSrc:
    './assets/poke.png',
  technologies: ['React', 'Redux'],
  description:
    'This educational project is to build a mobile web application to check a list of metrics (numeric values) using React and Redux. An API is selected that provides numeric data about a topic and then build the web app around it.',
  liveLink: 'https://teal-travesseiro-0a5b57.netlify.app/',
  githubLink: 'https://github.com/myaserkhan/React-Capstone',
};
const project4 = {
  title: 'Math-Magicians',
  id: 4,
  imageSrc:
    './assets/math.png',
  technologies: ['html', 'css', 'React'],
  description:
    'Math Magicians is a React calculator built with JavaScript and JSX. This applications allows you to do your basic computation and calculations easily.',
  liveLink: 'https://636caee9a8434160d14233c5--fastidious-pegasus-fbdfa4.netlify.app/',
  githubLink: 'https://github.com/myaserkhan/Math-Magicians',
};
const project5 = {
  title: 'Bookstore',
  id: 5,
  imageSrc:
    './assets/space.png',
  technologies: ['html', 'css', 'React'],
  description:
    'This is an educational project similar to the "Awesome Books" website. It is a MVP version of it that allows you to: Display a list of books, Add a book, Remove a selected book.',
  liveLink: 'https://app-bookstore-cms.netlify.app/',
  githubLink: 'https://github.com/myaserkhan/Bookstore-with-React',
};
const project6 = {
  title: 'MERN-E_Commerce',
  id: 6,
  imageSrc:
    './assets/amazona.jpg',
  technologies: ['Javascript', 'Nodejs', 'React', 'MongoDB'],
  description:
    'Welcome to my React and Node website. I have build a fully-functional e-commerce website exactly like amazon.',
  liveLink: 'https://amazona.onrender.com/',
  githubLink: 'https://github.com/myaserkhan/MERN-E_Commerce',
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

// Create work detail modal html elements
function modal(number) {
  // Create article modal
  const article = document.createElement('article');
  article.id = `project${projects[number].id}`;
  article.className = 'modal';
  // Create div inside article modal
  const insideDiv = document.createElement('div');
  insideDiv.className = 'modal-dialog';
  article.appendChild(insideDiv);
  // Create image inside div
  const projectImg = document.createElement('img');
  const imageDiv = document.createElement('div');
  imageDiv.className = 'work-image';
  projectImg.src = `${projects[number].imageSrc}`;
  insideDiv.appendChild(imageDiv);
  imageDiv.appendChild(projectImg);
  // Create x to close modal
  const closeModalBtn = document.createElement('button');
  closeModalBtn.innerHTML = 'X';
  closeModalBtn.id = 'close-project-modal';
  closeModalBtn.className = 'close-proj-modal';
  imageDiv.appendChild(closeModalBtn);
  // Create h1 inside div
  const headerDiv = document.createElement('div');
  headerDiv.className = 'project-title';
  const projectTitle = document.createElement('h3');
  projectTitle.textContent = `${projects[number].title}`;
  headerDiv.appendChild(projectTitle);
  // Create button div for desktop version
  // Create div for buttons
  const desktopProjectButtons = document.createElement('div');
  desktopProjectButtons.className = 'desktop-project-btn';
  // Create live and source buttons
  const deskLiveButton = document.createElement('button');
  const deskSourceButton = document.createElement('button');
  deskLiveButton.className = 'btn desk-live-btn';
  deskSourceButton.className = 'btn desk-source-btn';
  // Create a tag inside buttons
  const deskLiveLink = document.createElement('a');
  const deskSourceLink = document.createElement('a');
  const deskLinkText = document.createTextNode('See Live');
  const deskSourceText = document.createTextNode('See Source');
  deskLiveLink.appendChild(deskLinkText);
  deskSourceLink.appendChild(deskSourceText);
  deskLiveLink.href = `${projects[number].liveLink}`;
  deskSourceLink.href = `${projects[number].githubLink}`;
  deskLiveLink.setAttribute('target', '_blank');
  deskSourceLink.setAttribute('target', '_blank');
  deskLiveButton.append(deskLiveLink);
  deskSourceButton.append(deskSourceLink);
  // Create font-awesome icon inside button
  const deskLiveIcon = document.createElement('i');
  deskLiveIcon.className = 'fa-solid fa-arrow-up-right-from-square project-icon';
  const deskGitIcon = document.createElement('i');
  deskGitIcon.className = 'fa-brands fa-github project-icon';
  deskLiveButton.append(deskLiveIcon);
  deskSourceButton.append(deskGitIcon);
  desktopProjectButtons.appendChild(deskLiveButton);
  desktopProjectButtons.appendChild(deskSourceButton);
  headerDiv.appendChild(desktopProjectButtons);
  insideDiv.appendChild(headerDiv);
  // Create div to hold tags
  const technologyTags = document.createElement('div');
  technologyTags.className = 'work-tags modal-tags';
  insideDiv.appendChild(technologyTags);
  // Create ul for tags inside div
  const techologyList = document.createElement('ul');
  technologyTags.appendChild(techologyList);
  // Creat list items that go inside ul
  projects[number].technologies.forEach((listItem) => {
    const li = document.createElement('li');
    li.className = 'social';
    const a = document.createElement('a');
    const link = document.createTextNode(`${listItem}`);
    a.appendChild(link);
    a.href = '#';
    li.appendChild(a);
    techologyList.appendChild(li);
  });
  // Create paragraph div
  const projectTextDiv = document.createElement('div');
  const projectText = document.createTextNode(
    `${projects[number].description}`,
  );
  projectTextDiv.className = 'project-text';
  projectTextDiv.appendChild(projectText);
  insideDiv.appendChild(projectTextDiv);
  // Create div for buttons
  const projectButtons = document.createElement('div');
  projectButtons.className = 'project-btn';
  // Create live and source buttons
  const liveButton = document.createElement('button');
  const sourceButton = document.createElement('button');
  liveButton.className = 'btn live-btn';
  sourceButton.className = 'btn source-btn';
  // Create a tag inside buttons
  const liveLink = document.createElement('a');
  const sourceLink = document.createElement('a');
  const linkText = document.createTextNode('See Live');
  const sourceText = document.createTextNode('See Source');
  liveLink.appendChild(linkText);
  sourceLink.appendChild(sourceText);
  liveLink.href = `${projects[number].liveLink}`;
  sourceLink.href = `${projects[number].githubLink}`;
  liveLink.setAttribute('target', '_blank');
  sourceLink.setAttribute('target', '_blank');
  liveButton.append(liveLink);
  sourceButton.append(sourceLink);
  // Create font-awesome icon inside button
  const liveIcon = document.createElement('i');
  liveIcon.className = 'fa-solid fa-arrow-up-right-from-square project-icon';
  const gitIcon = document.createElement('i');
  gitIcon.className = 'fa-brands fa-github project-icon';
  liveButton.append(liveIcon);
  sourceButton.append(gitIcon);
  projectButtons.appendChild(liveButton);
  projectButtons.appendChild(sourceButton);
  insideDiv.appendChild(projectButtons);
  // Add article to body
  document.body.appendChild(article);
  // Add close trigger to x button on project detail
  closeModalBtn.addEventListener('click', () => {
    if (document.querySelector('.modal.is-visible')) {
      document
        .querySelector('.modal.is-visible')
        .classList.remove('is-visible');
      document.body.style.overflow = 'auto';
    }
  });
}

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
modal();