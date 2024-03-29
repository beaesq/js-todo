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

  deleteTodo(index) {
    this.list.splice(index, 1);
  }

  get list() {
    return this._list;
  }

  set list(value) {
    this._list = value;
  }
}

export { Project };