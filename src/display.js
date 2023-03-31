const display = (() => {
  const main = () => {
    let divContainer = document.createElement('div');
    divContainer.classList.add('main');
    divContainer.setAttribute('id', 'main');

    const divHeader = document.createElement('div');
    divHeader.classList.add('header');
    divHeader.setAttribute('id', 'header');
    const divLogo = document.createElement('div');
    divLogo.classList.add('logo');
    const divIcon = document.createElement('div');
    divIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>notebook</title><path d="M19 2V20H18V21H4V20H3V18H1V16H3V12H1V10H3V6H1V4H3V2H4V1H18V2H19M14 9H13V8H12V9H11V10H10V3H7V19H17V3H15V10H14V9M3 4V6H5V4H3M5 10H3V12H5V10M5 16H3V18H5V16Z" /></svg>`;
    divLogo.appendChild(divIcon);
    const divName = document.createElement('div');
    divName.classList.add('name');
    divName.textContent = 'to do';
    divLogo.appendChild(divName)

    const divProjectTitle = document.createElement('div');
    divProjectTitle.setAttribute('id', 'project-title');
    divHeader.appendChild(divProjectTitle);

    divHeader.appendChild(divLogo);
    divContainer.appendChild(divHeader);

    const divContent = document.createElement('div');
    divContent.classList.add('content');
    divContent.setAttribute('id', 'content');
    divContainer.appendChild(divContent);

    document.body.appendChild(divContainer);
  };

  const allTodos = (project) => {
    let divContent = document.getElementById('content');
    divContent.innerHTML = '';

    for (const todo of project.list) {
      const divCard = document.createElement('div');
      divCard.classList.add('card');

      const btnCollapsible = document.createElement('button');
      btnCollapsible.setAttribute('type', 'button');
      btnCollapsible.classList.add('collapsible', 'todo-item');
      const divTitle = document.createElement('div');
      divTitle.classList.add('title');
      divTitle.textContent = todo.title;
      btnCollapsible.appendChild(divTitle);
      const divDueDate = document.createElement('div');
      divDueDate.classList.add('dueDate');
      divDueDate.textContent = todo.dueDate;
      btnCollapsible.appendChild(divDueDate);

      const divCollapsible = document.createElement('div');
      divCollapsible.classList.add('collapsible-content');
      const divDescription = document.createElement('div');
      divDescription.classList.add('description');
      divDescription.textContent = todo.description;
      divCollapsible.appendChild(divDescription);
      const divPriority = document.createElement('div');
      divPriority.classList.add('priority');
      divPriority.textContent = todo.priority;
      divCollapsible.appendChild(divPriority);
      
      divCard.appendChild(btnCollapsible);
      divCard.appendChild(divCollapsible);

      divContent.appendChild(divCard);
    }
  };

  const projectTitle = (project) => {
    let divProjectTitle = document.getElementById('project-title');

    divProjectTitle.textContent = project.title;
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

  return { main, hello, allTodos, projectTitle, makeProjectModal };

})();

export { display };