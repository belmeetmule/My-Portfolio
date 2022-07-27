// js file
const projects = [
  {
    id: 'project-1',
    name: 'Tonic',
    featured_image: 'images/Portfolio-1.png',
    sub: [
      'CANOPY',
      '',
      'Back End Dev',
      '',
      '2015',
    ],
    langs: [
      'html',
      'css',
      'javascript',
    ],
    live_link: '',
    source_link: '',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    id: 'project-2',
    name: 'Multi-Post Stories',
    featured_image: 'images/Portfolio-2.png',
    sub: [
      'CANOPY',
      '',
      'Back End Dev',
      '',
      '2015',
    ],
    langs: [
      'html',
      'css',
      'javascript',
    ],
    live_link: '',
    source_link: '',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    id: 'project-3',
    name: 'Facebook 360',
    featured_image: 'images/Portfolio-3.png',
    sub: [
      'CANOPY',
      '',
      'Back End Dev',
      '',
      '2015',
    ],
    langs: [
      'html',
      'css',
      'javascript',
    ],
    live_link: '',
    source_link: '',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    id: 'project-4',
    name: 'Uber Navigation',
    featured_image: 'images/Portfolio-4.png',
    sub: [
      'CANOPY',
      '',
      'Back End Dev',
      '',
      '2015',
    ],

    langs: [
      'html',
      'css',
      'javascript',
    ],

    live_link: '',
    source_link: '',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
];

const detailText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent';

function makeUL(array) {
  // Create the list element:
  var list = document.createElement('ul');

  for (let i = 0; i < array.length; i++) {
      // Create the list item:
      let item = document.createElement('li');

      // Set its contents:
      if(i%2 === 0){
          item.appendChild(document.createTextNode(array[i]));
          item.classList.add('role-year');
      }else{
          let bullets = document.createElement('span');
          bullets.classList.add('dot');
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
  let list = document.createElement('ul');

  for (let i = 0; i < array.length; i++) {
      // Create the list item:
      let item = document.createElement('li');
     
      // Set its contents:
      item.appendChild(document.createTextNode(array[i]));
      item.classList.add('languages');

      // Add it to the list:
      list.appendChild(item);
  }

  // Finally, return the constructed list:
  return list;
}

  function addWorkSection(pro){
     
  const portfolio=document.querySelector('#portfolio');

  /* project div */
  let project_div = document.createElement("div");
  project_div.id=pro.id;
  project_div.classList.add('project');

  /* image div */
  let featured_image_div = document.createElement('div');
  let featured_image= document.createElement('img');
  featured_image.src=pro.featured_image;
  featured_image.alt= pro.id+' picture';
  featured_image.classList.add('featured_image-mobile');
  featured_image_div.appendChild(featured_image);
  project_div.appendChild(featured_image_div);

  /* project description (details) */
  let project_detail_div = document.createElement("div");
  let name = document.createElement("h2");
  name.innerHTML=pro.name;
  name.classList.add('project-title');
  project_detail_div.appendChild(name);
  project_div.appendChild(project_detail_div);
  
  /* list of languages */
  let subTitle = makeUL(pro.sub);
  subTitle.classList.add('icons');
  project_detail_div.appendChild(subTitle);

  let description = document.createElement('p');
  description.innerHTML=pro.description;
  project_detail_div.appendChild(description);
  
  let languagesList = makeL(pro.langs);
  languagesList.classList.add('icons');
  project_detail_div.appendChild(languagesList);

  let more = document.createElement('button');
  more.id= pro.id;
  more.type="button";
  more.innerHTML="See Project";
  more.classList.add('see-more-button');
 
  project_detail_div.appendChild(more);
  portfolio.appendChild(project_div);
}

function addPortfolio(){
  for(let i= 0; i < projects.length; i++){
      addWorkSection(projects[i]);
  }
}


document.addEventListener('DOMContentLoaded', function() {
  addPortfolio();
}, false);

// pup up 
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
    <li class="canopy">CANOPY</li>
    <li class="counter"><span class='dot'> <span>
    </li>
    <li class="bg">Back End Dev</li>
    <li class="counter"><span class='dot'> <span>
    </li>
    <li class="bg">2015</li>
</ul>
<img src=${project.featured_image} alt="featured project image" class="modal-card-img">
<div class="modal-project-description">
    <p class="modal-description">${detailText}</p>
    <div class="modal-links">
        <ul class="icons">
          ${li}
          <li class="languages">Github </li>
          <li class="languages">Ruby </li>
          <li class="languages"> Bootsrap</li>
        </ul>
        <hr>
        <div class="live-links">
            <button class="btn-enabled" id='live-link' type="button">
                See live
                <img src="./images/live-icon-new.png">
            </button>
            <button class="btn-enabled" id='btn-source-link' type="button">
                See source
                <img src="./images/source.png">
                </div>
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

function addLi(proId){
  document.addEventListener('click', function(e){
    if(e.target && e.target.id == proId){
        //display modal
        displayModal(proId);
    }
  });

}

// iterate over and add listner to all buttons
for(let i= 0; i < projects.length; i++){
  addLi(projects[i].id);
}
