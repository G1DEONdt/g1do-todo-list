import { project } from "./project";
const content = document.querySelector(".content");


export function renderProject() {
    resetRender();
    for(let item in project) {
        renderTodo(project[item]);
    }
}

export function renderTodo(todo){
    const item = document.createElement("div");
    item.classList.add("todo-item");
    
    const urgency = document.createElement("div");
    urgency.classList.add("item-urgency");
    
    const check = document.createElement("button");
    check.classList.add("item-check");
    
    const title = document.createElement("h3");
    title.classList.add("item-title");

    const date = document.createElement("div");
    date.classList.add("item-date");
    
    const day = document.createElement("p");
    day.classList.add("item-date-day");
    
    const month = document.createElement("p");
    month.classList.add("item-date-month");
    
    const expand = document.createElement("button");
    expand.classList.add("item-expand");

    const expandIcon = document.createElement("div");


    item.appendChild(urgency);
    item.appendChild(check);
    item.appendChild(title);
    item.appendChild(date);
    date.appendChild(day);
    date.appendChild(month);
    item.appendChild(expand);
    expand.appendChild(expandIcon);

    title.innerText = todo.getName();
    day.innerText = todo.getDay();
    month.innerText = todo.getMonth();
    
    content.appendChild(item);
}

function resetRender() {
    content.innerHTML = "";
}