class Item {
  constructor(title = 'New To Do', dueDate = new Date(), priority = 'default', description = 'empty description') {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    this._dueDate = value;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    value = Number.isInteger(value) ? value : value.toLowerCase();
    switch (value) {
      case 0:
      case 'low':
      case 'lo':
        this._priority = 'low';
        break;
      case 1:
      case 'medium':
      case 'med':
        this._priority = 'medium';
        break;
      case 2:
      case 'high':
      case 'hi':
        this._priority = 'high';
        break;
      case 3:
      case 'urgent':
      case 'urg':
        this._priority = 'urgent';
        break;
      default:
        this._priority = 'low';
        break;
    }
  }

  togglePriority() {
    let priorityNum = this.priorityTextToNum();
    this.priority = (priorityNum + 1) % 4;
  }

  priorityTextToNum(priorityText = this.priority) {
    priorityText = priorityText.toLowerCase();
    switch (priorityText) {
      case 'low':
        return 0;
        break;
      case 'medium':
        return 1;
        break;
      case 'high':
        return 2;
        break;
      case 'urgent':
        return 3;
        break;            
      default:
        return 0;
        break;
    }
  }
}

export { Item };