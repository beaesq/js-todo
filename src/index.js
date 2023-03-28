import { Item } from './todo.js';
import { Project } from './project.js';
import { display } from './display.js';

console.log('start');

let project = new Project('test project');

project.addTodo(new Item('new todo', 11, 1));

console.log(project.list);
display.main();