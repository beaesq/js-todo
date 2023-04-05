import { capitalize } from 'lodash';
import { format } from 'date-fns';

const display = (() => {
  const main = () => {
    let divContainer = document.createElement('div');
    divContainer.classList.add('main');
    divContainer.setAttribute('id', 'main');

    const divSidebar = document.createElement('div');
    divSidebar.classList.add('sidebar');
    divSidebar.setAttribute('id', 'sidebar');
    divContainer.appendChild(divSidebar);

    const divContent = document.createElement('div');
    divContent.classList.add('content');
    divContent.setAttribute('id', 'content');
    divContainer.appendChild(divContent);

    document.body.appendChild(divContainer);
    addSidebarContent();
  };

  const addSidebarContent = () => {
    const divSidebar = document.getElementById('sidebar');

    const divLogo = document.createElement('div');
    divLogo.classList.add('logo');
    const divIcon = document.createElement('div');
    divIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>notebook</title><path d="M19 2V20H18V21H4V20H3V18H1V16H3V12H1V10H3V6H1V4H3V2H4V1H18V2H19M14 9H13V8H12V9H11V10H10V3H7V19H17V3H15V10H14V9M3 4V6H5V4H3M5 10H3V12H5V10M5 16H3V18H5V16Z" /></svg>`;
    divLogo.appendChild(divIcon);
    const divName = document.createElement('div');
    divName.classList.add('name');
    divName.textContent = 'to do';
    divLogo.appendChild(divName)

    const divProjectList = document.createElement('div');
    divProjectList.setAttribute('id', 'project-list');

    const divButtonContainer = document.createElement('div');
    divButtonContainer.setAttribute('id', 'project-list-buttons');
        
    divSidebar.appendChild(divLogo);
    divSidebar.appendChild(divProjectList);
    divSidebar.appendChild(divButtonContainer);

    addProjectButtons();
  }

  const addProjectButtons = () => {
    const divAdd = document.createElement('div');
    divAdd.classList.add('project-button', 'button-add-project');
    const divAddIcon = document.createElement('div');
    divAddIcon.classList.add('button-add-project');
    divAddIcon.innerHTML = `<svg class='button-add-project' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>plus-box</title><path class='button-add-project' d="M12 16H10V12H6V10H10V6H12V10H16V12H12ZM18 20H4V19H3V18H2V4H3V3H4V2H18V3H19V4H20V18H19V19H18ZM17 18V17H18V5H17V4H5V5H4V17H5V18Z" /></svg>`;
    const divAddText = document.createElement('div');
    divAddText.classList.add('text', 'button-add-project');
    divAddText.textContent = 'Add New Project';
    
    const divDelete = document.createElement('div');
    divDelete.classList.add('project-button', 'button-delete-project');
    const divDeleteIcon = document.createElement('div');
    divDeleteIcon.classList.add('button-delete-project');
    divDeleteIcon.innerHTML = `<svg class='button-delete-project' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>trash</title><path class='button-delete-project' d="M10 7V16H8V7H10M12 7H14V16H12V7M8 2H14V3H19V5H18V19H17V20H5V19H4V5H3V3H8V2M6 5V18H16V5H6Z" /></svg>`;
    const divDeleteText = document.createElement('div');
    divDeleteText.classList.add('text', 'button-delete-project');
    divDeleteText.textContent = 'Delete Project';
    
    divAdd.appendChild(divAddIcon);
    divAdd.appendChild(divAddText);
    divDelete.appendChild(divDeleteIcon);
    divDelete.appendChild(divDeleteText);

    const divButtonContainer = document.getElementById('project-list-buttons');
    divButtonContainer.appendChild(divAdd);
    divButtonContainer.appendChild(divDelete);
  }

  const allTodos = (project) => {
    let divContent = document.getElementById('content');
    divContent.innerHTML = '';

    for (let [index, todo] of project.list.entries()) {
      const divCard = document.createElement('div');
      divCard.classList.add('card');

      const btnCollapsible = document.createElement('button');
      btnCollapsible.setAttribute('type', 'button');
      btnCollapsible.classList.add('collapsible', 'todo-item', todo.priority);
      const divTitle = document.createElement('div');
      divTitle.classList.add('title');
      divTitle.setAttribute('contenteditable', 'true');
      divTitle.setAttribute('index', index);
      divTitle.textContent = todo.title;
      btnCollapsible.appendChild(divTitle);
      const divDueDate = document.createElement('div');
      divDueDate.classList.add('dueDate');
      divDueDate.textContent = format(todo.dueDate, 'MMM-dd-yyyy HH:mm aa');
      btnCollapsible.appendChild(divDueDate);

      const divCollapsible = document.createElement('div');
      divCollapsible.classList.add('collapsible-content', todo.priority);
      const divDescription = document.createElement('div');
      divDescription.classList.add('description');
      divDescription.setAttribute('index', index);
      divDescription.setAttribute('contenteditable', 'true');
      divDescription.textContent = todo.description;
      divCollapsible.appendChild(divDescription);
      const divPriority = document.createElement('div');
      divPriority.classList.add('priority');
      divPriority.setAttribute('index', index);
      divPriority.textContent = `Priority: ${capitalize(todo.priority)}`;
      divCollapsible.appendChild(divPriority);
      const divButtonDate = document.createElement('div');
      divButtonDate.classList.add('edit-dueDate');
      divButtonDate.setAttribute('index', index);
      divButtonDate.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" index=${index} viewBox="0 0 22 22"><title>calendar</title><path index=${index} d="M19 20H3V19H2V3H3V2H5V0H7V2H15V0H17V2H19V3H20V19H19V20M4 4V6H18V4H4M4 8V18H18V8H4M12 12H16V16H12V12Z" /></svg>`;
      divCollapsible.appendChild(divButtonDate);
      const divButtonDelete = document.createElement('div');
      divButtonDelete.classList.add('delete');
      divButtonDelete.setAttribute('index', index);
      divButtonDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>trash</title><path d="M10 7V16H8V7H10M12 7H14V16H12V7M8 2H14V3H19V5H18V19H17V20H5V19H4V5H3V3H8V2M6 5V18H16V5H6Z" /></svg>`;
      divCollapsible.appendChild(divButtonDelete);
      
      
      divCard.appendChild(btnCollapsible);
      divCard.appendChild(divCollapsible);

      divContent.appendChild(divCard);
    }
  };

  const projectTitles = (projectList, currentProjectIndex) => {
    let divProjectList = document.getElementById('project-list');
    divProjectList.innerHTML = '';

    for (let [index, project] of projectList.entries()) {
      let divProjectTitle = document.createElement('div');
      divProjectTitle.classList.add('title');
      divProjectTitle.setAttribute('index', index);
      if (index == currentProjectIndex) {
        divProjectTitle.classList.add('current-project');
      }
      divProjectTitle.textContent = project.title;
      divProjectList.appendChild(divProjectTitle);
    }
  };

  const hello = () => {
    console.log('hello');
  };

  const makeProjectModal = () => {
    let divModal = document.createElement('div');
    divModal.classList.add('modal');
    divModal.setAttribute('id', 'project-modal');
    
    const divModalContent = document.createElement('div');
    divModalContent.classList.add('modal-content');
    
    const divModalHeader = document.createElement('div');
    divModalHeader.classList.add('heading');
    divModalHeader.textContent = 'Add a new project';
    divModalContent.appendChild(divModalHeader);
    const spanClose = document.createElement('span');
    spanClose.classList.add('close');
    spanClose.setAttribute('id', 'close-project');
    spanClose.innerHTML = '&times';
    divModalContent.appendChild(spanClose);

    const form = document.createElement('form');
    form.setAttribute('id', 'form-project');
    form.setAttribute('action', 'index.html');
    form.setAttribute('method', 'post');

    const labelTitle = document.createElement('label');
    labelTitle.setAttribute('for', 'title');
    labelTitle.setAttribute('id', 'project-title-label');
    labelTitle.textContent = 'Project Title:';
    form.appendChild(labelTitle);
    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('name', 'title');
    inputTitle.setAttribute('id', 'project-title-input');
    form.appendChild(inputTitle);
    const btnSubmit = document.createElement('button');
    btnSubmit.setAttribute('type', 'submit');
    btnSubmit.setAttribute('id', 'project-submit');
    btnSubmit.textContent = 'Add Project';
    form.appendChild(btnSubmit);

    divModalContent.appendChild(form);

    divModal.appendChild(divModalContent);
    document.body.appendChild(divModal);
  };

  const addTodoButton = () => {
    const divAddTodo = document.createElement('a');
    divAddTodo.setAttribute('id', 'button-add-todo');
    divAddTodo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>plus</title><path d="M12 17H10V12H5V10H10V5H12V10H17V12H12Z" /></svg>`;
    document.body.appendChild(divAddTodo);
  }

  const showProjectModal = () => { 
    document.getElementById('project-modal').style.display = 'block';
    document.getElementById('project-title-input').value = '';
  }

  const showDueDateModal = (index = 0) => {
    // hidden input for the index 
    document.getElementById('edit-dueDate-index').value = `${index}`;
    document.getElementById('dueDate-modal').style.display = 'block';
    document.getElementById('edit-dueDate-input').value = format(new Date(), "yyyy-MM-dd'T'HH:mm");
  }

  const makeDueDateModal = () => {
    let divModal = document.createElement('div');
    divModal.classList.add('modal');
    divModal.setAttribute('id', 'dueDate-modal');

    const divModalContent = document.createElement('div');
    divModalContent.classList.add('modal-content');
    
    const divModalHeader = document.createElement('div');
    divModalHeader.classList.add('heading');
    divModalHeader.textContent = 'Edit the due date and time';
    divModalContent.appendChild(divModalHeader);
    const spanClose = document.createElement('span');
    spanClose.classList.add('close');
    spanClose.setAttribute('id', 'close-dueDate');
    spanClose.innerHTML = '&times';
    divModalContent.appendChild(spanClose);

    const form = document.createElement('form');
    form.setAttribute('id', 'form-dueDate');
    form.setAttribute('action', 'index.html');
    form.setAttribute('method', 'post');

    const inputIndex = document.createElement('input');
    inputIndex.setAttribute('type', 'number');
    inputIndex.setAttribute('name', 'index');
    inputIndex.setAttribute('hidden', 'true');
    inputIndex.setAttribute('id', 'edit-dueDate-index');
    form.appendChild(inputIndex);

    const labelDueDate = document.createElement('label');
    labelDueDate.setAttribute('for', 'dueDate');
    labelDueDate.setAttribute('id', 'edit-dueDate-label');
    labelDueDate.textContent = 'New Date & Time:';
    form.appendChild(labelDueDate);
    const inputDueDate = document.createElement('input');
    inputDueDate.setAttribute('type', 'datetime-local');
    inputDueDate.setAttribute('name', 'dueDate');
    inputDueDate.setAttribute('id', 'edit-dueDate-input');
    form.appendChild(inputDueDate);

    const btnSubmit = document.createElement('button');
    btnSubmit.setAttribute('type', 'submit');
    btnSubmit.setAttribute('id', 'dueDate-submit');
    btnSubmit.textContent = 'Edit';
    form.appendChild(btnSubmit);

    divModalContent.appendChild(form);

    divModal.appendChild(divModalContent);
    document.body.appendChild(divModal);
  }

  return { main, hello, allTodos, projectTitles, makeProjectModal, showProjectModal, addTodoButton, makeDueDateModal, showDueDateModal };

})();

export { display };