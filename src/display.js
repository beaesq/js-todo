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

    const divFooter = document.createElement('div');
    divFooter.classList.add('footer');
    divFooter.setAttribute('id', 'footer');
    divFooter.innerHTML = '2023';
    divContainer.appendChild(divFooter);

    const divContent = document.createElement('div');
    divContent.classList.add('content');
    divContent.setAttribute('id', 'content');
    divContainer.appendChild(divContent);

    document.body.appendChild(divContainer);
  };

  const allTodos = (project) => {

  };

  const hello = () => {
    console.log('hello');
  };

  return { main, hello, allTodos };

})();

export { display };