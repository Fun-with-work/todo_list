import "./add-todo.css";
import { addTaskButton } from "./side-menu.js";
import { createMainContent } from "./main-content.js";
import { createTodoForm } from "./create-todo-form.js";
import { addTask } from "./task-list.js";

function returnToMainView() {
    const mainContentArea = document.getElementById("main-content");
    if (mainContentArea) {
        mainContentArea.classList.remove("form-mode");
        mainContentArea.textContent = "";
        const refreshed = createMainContent();

        while (refreshed.firstChild) {
            mainContentArea.appendChild(refreshed.firstChild);        
        }
    }
}

addTaskButton.addEventListener("click", () => {
    const mainContentArea = document.getElementById("main-content");
    
    if (mainContentArea) {
        mainContentArea.textContent = "";
        mainContentArea.classList.add("form-mode");
        
        const todoForm = createTodoForm();
        mainContentArea.appendChild(todoForm);
        
        const cancelBtn = todoForm.querySelector("#cancel-button");
        cancelBtn.addEventListener("click", () => {
            returnToMainView();
        });
                
        todoForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const newTask = {
                project: todoForm.querySelector("#task-project").value,
                title: todoForm.querySelector("#task-title").value,
                description: todoForm.querySelector("#task-desc").value,
                dueDate: todoForm.querySelector("#task-due-date").value,
                priority: todoForm.querySelector("#task-priority").value,
            };
            
            addTask(newTask);
            todoForm.reset();

            console.log("New Task Added:", newTask);
            console.log("All Tasks:", JSON.parse(localStorage.getItem("myTasks")));
           
        });
    }
});



