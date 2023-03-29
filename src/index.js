import { Item } from './todo.js';
import { Project } from './project.js';
import { display } from './display.js';
import './style.css';

let projectList = [];
let currentProjectIndex = 0;

//--TESTING--
console.log('start');

// let project = new Project('test project');

// project.addTodo(new Item('new todo', 11, 1));

// project.list[0].description = 'stan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loona';
// project.addTodo(new Item('new todo', 11, 1));
// project.list[1].description = 'stan loona';
// project.addTodo(new Item('new todo', 11, 1));
// project.list[2].description = 'stan loona';
// project.addTodo(new Item('new todo', 11, 1));
// project.list[3].description = 'stan loona';

// console.log(project.list);
//-----------

// startup
const start = () => {
  // make modals
  setProjectModal();

  // next! idk clean this up
  
  display.main();
  makeNewProject(); // remove this later, just make a default new project on first startup
  display.projectTitle(projectList[currentProjectIndex]);
  display.allTodos(projectList[currentProjectIndex]);
};

const makeNewProject = (title = 'New Project') => {
  let project = new Project(title);
  projectList.push(project);
  console.log(projectList);
  currentProjectIndex = projectList.length - 1;
  display.projectTitle(projectList[currentProjectIndex]);
  display.allTodos(projectList[currentProjectIndex]);
}

const setProjectModal = () => {
  display.makeProjectModal();

  //set event listeners
  const form = document.querySelector(`#form-project`);
  const modal = document.getElementById('project-modal');
  const modalBtn = document.getElementById('btn-new-book'); // CHANGE THIS
  const modalClose = document.getElementById('close-project');

  // modalBtn.onclick = function() {
  //   modal.style.display = "block";
    
  //   // reset form to default
  //   document.getElementById('project-title-input').value = '';
  // }

  modalClose.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log('submit form');
    makeNewProject(form.elements['title'].value);
    modal.style.display = 'none';
    const content = document.getElementById('content');
    content.scrollTo(0, content.scrollHeight);
    console.log(projectList[currentProjectIndex]);
  });

};

start();