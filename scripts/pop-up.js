// js file
const projects = [
  {
    id: 'project-1',
    name: 'Homely',
    featuredImage: '../project-images/homely-mockup.jpg',
    sub: [
      'Microverse',
      '',
      'Full-stack Dev',
      '',
      '2023',
    ],
    langs: [
      'React',
      'Ruby on Rails',
      'PostgreSQL',
    ],
    live_link: 'https://homelyheaven.netlify.app/',
    source_link: 'https://github.com/belmeetmule/homely-backend',
    description:
      'Homely is a web application that helps user to find and book visits to houses they want to buy or rent. Moreover, users can add houses they want to sell or rent, delete houses, book visits and see their bookings. It is built using react and RoR api',
  },
  {
    id: 'project-2',
    name: 'Great Ethiopian Run',
    featuredImage: './project-images/rsz_screen-shoot-desktop.png',
    sub: [
      'Microverse',
      '',
      'Front End Dev',
      '',
      '2022',
    ],
    langs: [
      'html',
      'css',
      'javascript',
    ],
    live_link: 'https://belmeetmule.github.io/Great-Ethiopian-Run/',
    source_link: 'https://github.com/belmeetmule/Great-Ethiopian-Run',
    description:
      'A website project to promote the great ethiopian run that is going to be conducted on November 2022. The website has a nice look and feel on both small devices like phone and tablets and devices with large screens !!',
  },
  {
    id: 'project-3',
    name: 'My-Expenses',
    featuredImage: './project-images/my-expenses2.png',
    sub: [
      'Microverse',
      '',
      'Full-stack Dev',
      '',
      '2023',
    ],
    langs: [
      'Rails',
      'css',
      'PostgreSQL',
    ],
    live_link: 'https://my-expenses-3hoz.onrender.com/',
    source_link: 'https://github.com/belmeetmule/My-Exp/tree/development',
    description:
    'My-Exp is a personal expense tracker mobile app that allows users to:  create expense category, introduce new transactions associated with a category and see total expense as well as expense per each category. User should register and log in, so that the data is private to them.',
  },
  {
    id: 'project-4',
    name: 'To-Do-App',
    featuredImage: 'project-images/rsz_todo.png',
    sub: [
      'Microverse',
      '',
      'Front End Dev',
      '',
      '2022',
    ],
    langs: [
      'html',
      'css',
      'javascript',
    ],
    live_link: 'https://belmeetmule.github.io/to-do-list/dist/',
    source_link: 'https://github.com/belmeetmule/to-do-list',
    description:
    'This is a to-do-list app project. The application allows user to add, edit, remove tasks in the to do list !! This app is built using java script, html and css.',
  },
  {
    id: 'project-5',
    name: 'Portfolio website',
    featuredImage: 'project-images/rsz_portfolio2.png',
    sub: [
      'Microverse',
      '',
      'Front End Dev',
      '',
      '2022',
    ],

    langs: [
      'html',
      'css',
      'javascript',
    ],

    live_link: 'https://belmeetmule.github.io/My-Portfolio/',
    source_link: 'https://belmeetmule.github.io/My-Portfolio/',
    description:
    'This project is a responsive mobile first Portfolio website. This website can be used by professionals like software developers to showcase and promote their work. Hence, one can use it to present his/her works, contact address, skill set and contact me form. It is built using java script and bootstrap.',
  },
];

function makeUL(array) {
  // Create the list element:
  const list = document.createElement('ul');

  for (let i = 0; i < array.length; i += 1) {
    // Create the list item:
    const item = document.createElement('li');

    // Set its contents:
    if (i % 2 === 0) {
      item.appendChild(document.createTextNode(array[i]));
      item.classList.add('role-year');
    } else {
      const bullets = document.createElement('span');
      bullets.classList.add('dot');
      bullets.innerHTML = '&#9679;';
      item.appendChild(bullets);
    }
    // Add it to the list:
    list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}

function makeL(array) {
  // Create the list element:
  const list = document.createElement('ul');

  for (let i = 0; i < array.length; i += 1) {
    // Create the list item:
    const item = document.createElement('li');

    // Set its contents:
    item.appendChild(document.createTextNode(array[i]));
    item.classList.add('languages');

    // Add it to the list:
    list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}

function addWorkSection(pro) {
  const portfolio = document.querySelector('#portfolio');

  /* project div */
  const projectDiv = document.createElement('div');
  projectDiv.id = pro.id;
  projectDiv.classList.add('project');

  /* image div */
  const featuredImageDiv = document.createElement('div');
  featuredImageDiv.classList.add('featured-images-container');
  const featuredImage = document.createElement('img');
  featuredImage.src = pro.featuredImage;
  featuredImage.alt = `${pro.id} picture`;
  featuredImage.classList.add('featuredImage-mobile');
  featuredImageDiv.appendChild(featuredImage);
  projectDiv.appendChild(featuredImageDiv);

  /* project description (details) */
  const projectDetailDiv = document.createElement('div');
  projectDetailDiv.classList.add('project-detail-div');
  const name = document.createElement('h2');
  name.innerHTML = pro.name;
  name.classList.add('project-title');
  projectDetailDiv.appendChild(name);
  projectDiv.appendChild(projectDetailDiv);

  /* list of languages */
  const subTitle = makeUL(pro.sub);
  subTitle.classList.add('icons');
  projectDetailDiv.appendChild(subTitle);

  const description = document.createElement('p');
  description.innerHTML = pro.description;
  projectDetailDiv.appendChild(description);

  const languagesList = makeL(pro.langs);
  languagesList.classList.add('icons');
  projectDetailDiv.appendChild(languagesList);

  const more = document.createElement('button');
  more.id = pro.id;
  more.type = 'button';
  more.innerHTML = 'See Project';
  more.classList.add('see-more-button');

  projectDetailDiv.appendChild(more);
  portfolio.appendChild(projectDiv);
}

function addPortfolio() {
  for (let i = 0; i < projects.length; i += 1) {
    addWorkSection(projects[i]);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  addPortfolio();
}, false);

// pup up
const additionalLanguages = ['Github', 'Ruby', 'Bootsrap'];
const projectButtons = [];
const buttons = document.querySelectorAll('button');
const modal = document.getElementById('myModal');

buttons.forEach((button) => {
  const [btn] = button.id.split('-');
  if (btn === 'project') projectButtons.push(button);
});

const displayModal = (id) => {
  let li = '';
  const project = projects.find((p) => p.id === id);
  project.langs.forEach((project) => {
    li += `<li class="languages">${project}</li>`;
  });

  const render = `
<div class="modal-content">
<span class="close">&times;</span>
<h2 class="modal-card-title">${project.name}</h2>
<ul class="icons">
    <li class="canopy">${project.sub[0]}</li>
    <li class=""><span class='dot'> &#9679; <span>
    </li>
    <li class="bg">${project.sub[2]}</li>
    <li class="">
      <span class='dot'> &#9679; <span>
    </li>
    <li class="bg">${project.sub[4]}</li>
</ul>
<div class="featured-img-cont">
  <img src=${project.featuredImage} alt="featured project image" class="modal-card-img">
</div>
<div class="modal-project-description">
    <p class="modal-description">${project.description}</p>
    <div class="modal-links">
        <ul class="icons">
          ${li}
          <li class="languages"> ${additionalLanguages[0]}</li>
          <li class="languages"> ${additionalLanguages[1]}</li>
          <li class="languages"> ${additionalLanguages[2]}</li>
        </ul>
        <hr>
        <div class="live-links">
            <button class="btn-enabled " id='live-link' type="button">
                <a href = "${project.live_link}" target = "_blank"> See live
                <img src="./images/live-icon-new.png"> </a>
            </button>
            <button class="btn-enabled source-links" id='btn-source-link' type="button">
            <a href = "${project.source_link}" target = "_blank">
                See source
                <img src="./images/source.png"> 
              </a>
              
            </button>
        </div>
    </div>
</div>
</div>`;
  modal.innerHTML = render;
  modal.style.display = 'block';
  const closeModalBtn = document.querySelector('span.close');
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

function addLi(proId) {
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === proId) {
      // display modal
      displayModal(proId);
    }
  });
}

// iterate over and add listner to all buttons
for (let i = 0; i < projects.length; i += 1) {
  addLi(projects[i].id);
}
