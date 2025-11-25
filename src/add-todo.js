import "./add-todo.css";
import { addTaskButton } from "./side-menu.js";

console.log(addTaskButton.textContent);

function createTodoForm() {
    const todoForm = document.createElement("form");
    todoForm.id = "todo-form";
    todoForm.className = "todo-form";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Task Title:";
    titleLabel.htmlFor = "task-title";
    todoForm.appendChild(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "task-title";
    titleInput.name = "task-title";
    titleInput.required = true;
    todoForm.appendChild(titleInput);

    const descLabel = document.createElement("label");
    descLabel.textContent = "Description:";
    descLabel.htmlFor = "task-desc";
    todoForm.appendChild(descLabel);

    const descInput = document.createElement("textarea");
    descInput.id = "task-desc";
    descInput.name = "task-desc";
    descInput.rows = 4;
    descInput.required = true;
    todoForm.appendChild(descInput);

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date:";
    dueDateLabel.htmlFor = "task-due-date";
    todoForm.appendChild(dueDateLabel);

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "task-due-date";
    dueDateInput.name = "task-due-date";
    dueDateInput.required = true;
    todoForm.appendChild(dueDateInput);

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority:";
    priorityLabel.htmlFor = "task-priority";
    todoForm.appendChild(priorityLabel);

    const prioritySelect = document.createElement("select");
    prioritySelect.id = "task-priority";
    prioritySelect.name = "task-priority";
    prioritySelect.required = true;

    const priorities = ["Low", "Medium", "High"];
    priorities.forEach(priority => {
        const option = document.createElement("option");
        option.value = priority.toLowerCase();
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });
    todoForm.appendChild(prioritySelect);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Add Task";
    todoForm.appendChild(submitButton);

    return todoForm;
}

addTaskButton.addEventListener("click", () => {
    const mainContentArea = document.getElementById("main-content");
    const todoForm = createTodoForm();

    if (mainContentArea) {
        mainContentArea.appendChild(todoForm);
    }


    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log("New Task Added:", newTask);

        todoForm.remove();
    });
});



