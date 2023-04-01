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
  makeNewProject(); // default project on startup
  
  // testing pit start

  makeNewProject('project 2');
  makeNewProject('project 3');
  
  projectList[0].addTodo(new Item('title1', 'date', '0', 'description'));
  projectList[0].addTodo(new Item('title2', 'date', '0', 'description'));
  projectList[0].addTodo(new Item('title3', 'date', '0', 'description'));

  projectList[1].addTodo(new Item('title1', 'date', '0', 'description'));
  projectList[1].addTodo(new Item('title2', 'date', '0', 'description'));
  projectList[1].addTodo(new Item('title3', 'date', '0', 'description'));
  projectList[1].addTodo(new Item('title4', 'date', '0', 'description'));

  projectList[2].addTodo(new Item('title1', 'date', '0', 'description'));
  projectList[2].addTodo(new Item('title2', 'date', '0', 'description'));
  currentProjectIndex = 1;

  // testing pit end
  setSidebarListener();
  
  // refresh display; group these into one function later
  display.projectTitles(projectList, currentProjectIndex);
  display.allTodos(projectList[currentProjectIndex]);
  setTodoCollapsible();
};

const setTodoCollapsible = () => {
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
};

const setSidebarListener = () => {
  const divProjectList = document.getElementById('project-list');

  divProjectList.addEventListener('click', (e) => {
    if(e.target.classList.contains('title')) {
      let index = e.target.getAttribute('index');
      currentProjectIndex = index;

      // reload displays
      display.projectTitles(projectList, currentProjectIndex);
      display.allTodos(projectList[currentProjectIndex]);
      setTodoCollapsible();
    }
  });
}

const makeNewProject = (title = 'New Project') => {
  let project = new Project(title);
  projectList.push(project);
  console.log(projectList);
  currentProjectIndex = projectList.length - 1;
  display.projectTitles(projectList, currentProjectIndex);
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