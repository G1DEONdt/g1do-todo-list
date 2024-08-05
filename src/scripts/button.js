import { Todo } from "./todo";
import { addTodo } from "./project";
import { renderProject } from "./render";

const createTodo = document.querySelector(".create-todo");
const createProject = document.querySelector(".create-project");

export default function initaliseButtonEventListeners() {
    createTodo.addEventListener("click", () => {
        const title = prompt("What is your todo?");
        const description = prompt("What is the description?");
        const day = prompt("What day?");
        const month = prompt("What month?");
    
        const todo = new Todo(title, description, day, month);
        addTodo(todo);
        renderProject();
    })
}