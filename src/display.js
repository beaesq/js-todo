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
      const divTitle = document.createElement('div');
      divTitle.classList.add('title');
      divTitle.textContent = todo.title;
      divCard.appendChild(divTitle);
      const divDescription = document.createElement('div');
      divDescription.classList.add('description');
      divDescription.textContent = todo.description;
      divCard.appendChild(divDescription);
      const divDueDate = document.createElement('div');
      divDueDate.classList.add('dueDate');
      divDueDate.textContent = todo.dueDate;
      divCard.appendChild(divDueDate);
      const divPriority = document.createElement('div');
      divPriority.classList.add('priority');
      divPriority.textContent = todo.priority;
      divCard.appendChild(divPriority);

      divContent.appendChild(divCard);
    }
  };

  const projectTitle = (project) => {
    let divHeader = document.getElementById('header');

    const divProjectTitle = document.createElement('div');
    console.log(project.title);
    divProjectTitle.textContent = project.title;
    divProjectTitle.classList.add('project-title');
    divHeader.appendChild(divProjectTitle);
  };

  const hello = () => {
    console.log('hello');
  };

  return { main, hello, allTodos, projectTitle };

})();

export { display };