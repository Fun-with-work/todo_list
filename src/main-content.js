import "./main-content.css";
import { businessmanImage, checklistEditedImage } from "./image-variables";

const mainContent = document.createElement("div");
mainContent.id = "main-content";
mainContent.className = "main-content";
document.body.appendChild(mainContent);

const tasksContainer = document.createElement("div");
tasksContainer.id = "tasks-container";
tasksContainer.className = "tasks-container";
mainContent.appendChild(tasksContainer);    

const welcomeMessage = document.createElement("h1");
welcomeMessage.textContent = "Welcome to your To-Do list!";
welcomeMessage.id = "welcome-message";
tasksContainer.appendChild(welcomeMessage);

const infoMessage = document.createElement("p");
infoMessage.textContent = "Select a project from the side menu or add a new task to get started.";
infoMessage.id = "info-message";
tasksContainer.appendChild(infoMessage);


const tasksHeading = document.createElement("h2");
// tasksHeading.textContent = "All Tasks";
tasksHeading.id = "tasks-heading";
tasksContainer.appendChild(tasksHeading);   

