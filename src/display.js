const display = (() => {
  const main = () => {
    let divContainer = document.createElement('div');
    divContainer.classList.add('main');
    divContainer.setAttribute('id', 'main');

    const divHeader = document.createElement('div');
    divHeader.classList.add('header');
    divHeader.setAttribute('id', 'header');
    const divName = document.createElement('div');
    divName.textContent = 'to do';
    divName.classList.add('name');
    divHeader.appendChild(divName);
    divContainer.appendChild(divHeader);

    const divContent = document.createElement('div');
    divContent.classList.add('content');
    divContent.setAttribute('id', 'content');
    divContainer.appendChild(divContent);

    document.body.appendChild(divContainer);
  };

  const allTodos = (project) => {
    let divContent = document.getElementById('content');

    for (const todo of project) {
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

  const hello = () => {
    console.log('hello');
  };

  return { main, hello, allTodos };

})();

export { display };