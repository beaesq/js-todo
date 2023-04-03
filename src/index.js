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
  setAddTodoButton();
 
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

  setProjectButtonListener();
  // testing pit end
  setSidebarListener();
  
  // refresh display
  displayProjects();
  displayTodos();
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
      displayProjects();
      displayTodos();
    }
  });
}

const setProjectButtonListener = () => {
  const divProjectButtons = document.getElementById('project-list-buttons');
  
  divProjectButtons.addEventListener('click', (e) => {
    if(e.target.classList.contains('button-add-project')){
      display.showProjectModal();
    } else if(e.target.classList.contains('button-delete-project')){
      deleteProject(currentProjectIndex);
    }
  });
}

const deleteProject = (index) => {
  // alert if deleting last project
  if(projectList.length == 1) {
    alert('You can (not) delete');
  } else {
    projectList.splice(index, 1);
    // set new current project index
    currentProjectIndex = Math.max(0, currentProjectIndex - 1);
    displayProjects();
    displayTodos();
  }
}

const makeNewProject = (title = 'New Project') => {
  let project = new Project(title);
  projectList.push(project);
  currentProjectIndex = projectList.length - 1;
  displayProjects();
  displayTodos();
}

const setProjectModal = () => {
  display.makeProjectModal();

  //set event listeners
  const form = document.querySelector(`#form-project`);
  const modal = document.getElementById('project-modal');
  const modalBtn = document.getElementById('btn-new-book'); // CHANGE THIS
  const modalClose = document.getElementById('close-project');

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
    makeNewProject(form.elements['title'].value);
    modal.style.display = 'none';
    const content = document.getElementById('content');
    content.scrollTo(0, content.scrollHeight);
  });
};

const setAddTodoButton = () => {
  display.addTodoButton();

  const divAddTodo = document.getElementById('button-add-todo');
  divAddTodo.addEventListener('click', (e) => {
    const newTodo = new Item('New To Do Item', 'date~', 'yes', 'Add a description here!');
    projectList[currentProjectIndex].addTodo(newTodo);
    displayTodos();
  });
}

const displayTodos = () => {
  display.allTodos(projectList[currentProjectIndex]);
  setTodoCollapsible();
  setEditingListeners();
}

const setEditingListeners = () => {
  const divContent = document.getElementById('content');

  const titles = divContent.getElementsByClassName('title');
  for (const divTitle of titles) {
    divTitle.addEventListener('focusout',(e) => {
      const index = e.target.getAttribute('index');
      const newTitle = e.target.textContent;
      projectList[currentProjectIndex].list[index].title = newTitle;
      displayTodos();
    });
  }

  const descriptions = divContent.getElementsByClassName('description');
  for (const divDescription of descriptions) {
    divDescription.addEventListener('focusout',(e) => {
      const index = e.target.getAttribute('index');
      const newDescription = e.target.textContent;
      projectList[currentProjectIndex].list[index].description = newDescription;
      displayTodos();
    });
  }
}

const displayProjects = () => {
  display.projectTitles(projectList, currentProjectIndex);
}

start();