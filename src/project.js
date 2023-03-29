class Project {
  list = [];

  constructor(title = 'New Project') {
    this.title = title;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  addTodo(todo) {
    this.list.push(todo);
  }

  get list() {
    return this.list;
  }
}

export { Project };