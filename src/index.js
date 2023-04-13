import { Item } from './todo.js';
import { Project } from './project.js';
import { display } from './display.js';
import './style.css';
import { add } from 'date-fns';

let projectList = [];
let currentProjectIndex = 0;

// startup
const start = () => {
  // make modals
  setProjectModal();
  setDueDateModal();
  setAddTodoButton();
 
  display.main();
  load();

  // after making the sidebar
  setProjectButtonListener();
  setSidebarListener();
  
  // refresh display
  displayProjects();
  displayTodos();
};

const load = () => {
  let projects = JSON.parse(localStorage.getItem('projects'));

  if (projects === null) {  // if no projects found
    makeNewProject('New Project');
  } else {
    for (const project of projects) {
      makeNewProject(project.projectTitle);
      for (const todo of project.todos) {
        const newTodo = new Item(todo.title, new Date(todo.dueDate), todo.priority, todo.description);
        projectList[currentProjectIndex].addTodo(newTodo);
      }
    }
  }
  
}

const save = () => {
  const projects = [];

  for (const project of projectList) {
    const newProject = {};
    const todos = [];
    for (const item of project.list) {
      const newItem = {};
      newItem.title = item.title;
      newItem.description = item.description;
      newItem.dueDate = item.dueDate;
      newItem.priority = item.priority;
      todos.push(newItem);
    }

    newProject.projectTitle = project.title;
    newProject.todos = todos;
    projects.push(newProject);
  }
  localStorage.setItem('projects', JSON.stringify(projects));
}

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
    save();
  }
}

const makeNewProject = (title = 'New Project') => {
  let project = new Project(title);
  projectList.push(project);
  currentProjectIndex = projectList.length - 1;
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
    save();
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
    displayProjects();
    displayTodos();
    save();
  });
};

const setAddTodoButton = () => {
  display.addTodoButton();

  const divAddTodo = document.getElementById('button-add-todo');
  divAddTodo.addEventListener('click', (e) => {
    const newTodo = new Item('New To Do Item', add(new Date(), {hours: 1}), 'default', 'Add a description here!');
    projectList[currentProjectIndex].addTodo(newTodo);
    displayTodos();
    save();
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
      save();
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
      save();
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
      save();
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
      save();
    });
  }
}

start();