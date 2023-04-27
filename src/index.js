import "./style.css";
import CreateTask from "./task";
import CreateProject from "./project";

const task1 = new CreateTask("test title", "test detail", "1/1/23", "high");
const task2 = new CreateTask("test2", "test2 det", "1/1/25", "high");
console.log(task1);

const project1 = new CreateProject("Project1");
project1.addTask(task1);
project1.addTask(task2);

console.log(project1.taskList);
