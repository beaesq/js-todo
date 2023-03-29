import { Item } from './todo.js';
import { Project } from './project.js';
import { display } from './display.js';
import './style.css';

//--TESTING--
console.log('start');

let project = new Project('test project');

project.addTodo(new Item('new todo', 11, 1));

project.list[0].description = 'stan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loonastan loona';
project.addTodo(new Item('new todo', 11, 1));
project.list[1].description = 'stan loona';
project.addTodo(new Item('new todo', 11, 1));
project.list[2].description = 'stan loona';
project.addTodo(new Item('new todo', 11, 1));
project.list[3].description = 'stan loona';

console.log(project.list);
//-----------

display.main();
display.projectTitle(project);
display.allTodos(project);