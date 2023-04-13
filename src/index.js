import { Item } from './todo.js';
import { Project } from './project.js';
import { display } from './display.js';
import './style.css';
import { add } from 'date-fns';

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
  setDueDateModal();
  setAddTodoButton();
 
  display.main();
  makeNewProject(); // default project on startup
  
  // testing pit start

  makeNewProject('project 2');
  makeNewProject('project 3');
  
  projectList[0].addTodo(new Item('title1', new Date(), 0, 'description'));
  projectList[0].addTodo(new Item('title2', new Date(), 'urg', 'description'));
  projectList[0].addTodo(new Item('title3', new Date(), 2, 'description'));

  projectList[1].addTodo(new Item('title1', new Date(), 8, 'description'));
  projectList[1].addTodo(new Item('title2', new Date(), 'HI', 'description'));
  projectList[1].addTodo(new Item('title3', new Date(), 'med', 'description'));
  projectList[1].addTodo(new Item('title4', new Date(), 'dddd', 'description'));

  projectList[2].addTodo(new Item('title1', new Date(), 1, 'description'));
  projectList[2].addTodo(new Item('title2', new Date(), 3, 'description'));
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

const setDueDateModal = () => {
  display.makeDueDateModal();

  //set event listeners
  const form = document.querySelector(`#form-dueDate`);
  const modal = document.getElementById('dueDate-modal');
  const modalClose = document.getElementById('close-dueDate');

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
    const newDueDate = Date.parse(form.elements['dueDate'].value);
    const index = form.elements['index'].value;
    projectList[currentProjectIndex].list[index].dueDate = newDueDate;
    modal.style.display = 'none';
    const content = document.getElementById('content');
    content.scrollTo(0, content.scrollHeight);
    displayTodos();
  });
}

const setProjectModal = () => {
  display.makeProjectModal();

  //set event listeners
  const form = document.querySelector(`#form-project`);
  const modal = document.getElementById('project-modal');
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
    const newTodo = new Item('New To Do Item', add(new Date(), {hours: 1}), 'default', 'Add a description here!');
    projectList[currentProjectIndex].addTodo(newTodo);
    displayTodos();
  });
}

const displayTodos = (index = -1) => {
  display.allTodos(projectList[currentProjectIndex]);
  setTodoCollapsible();
  setEditingListeners();
  if (index >= 0) {
    let coll = document.getElementsByClassName("collapsible");
    coll[index].classList.toggle('active');
    let content = coll[index].nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}

const setEditingListeners = () => {
  setTitleListeners();
  setDescriptionListeners();
  setPriorityListeners();
  setDueDateListeners();
  setDeleteListeners();
}

const displayProjects = () => {
  display.projectTitles(projectList, currentProjectIndex);
}

const setTitleListeners = () => {
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
}

const setDescriptionListeners = () => {
  const divContent = document.getElementById('content');
  const descriptions = divContent.getElementsByClassName('description');
  for (const divDescription of descriptions) {
    divDescription.addEventListener('focusout',(e) => {
      const index = e.target.getAttribute('index');
      const newDescription = e.target.textContent;
      projectList[currentProjectIndex].list[index].description = newDescription;
      displayTodos(index);
    });
  }
}

const setPriorityListeners = () => {
  const divContent = document.getElementById('content');
  const prioritylist = divContent.getElementsByClassName('priority');
  for (const divPriority of prioritylist) {
    divPriority.addEventListener('click', (e) => {
      const index = e.target.getAttribute('index');
      projectList[currentProjectIndex].list[index].togglePriority();
      displayTodos(index);
    });
  }
}

const setDueDateListeners = () => {
  const divContent = document.getElementById('content');
  const dueDateButtons = divContent.getElementsByClassName('edit-dueDate');
  for (const divDueDate of dueDateButtons) {
    divDueDate.addEventListener('click', (e) => {
      const index = e.target.getAttribute('index');
      display.showDueDateModal(index);
    });
  }
}

const setDeleteListeners = () => {
  const divContent = document.getElementById('content');
  const deleteButtons = divContent.getElementsByClassName('delete');
  for (const divDelete of deleteButtons) {
    divDelete.addEventListener('click', (e) => {
      const index = e.target.getAttribute('index');
      projectList[currentProjectIndex].deleteTodo(index);
      displayTodos();
    });
  }
}

start();