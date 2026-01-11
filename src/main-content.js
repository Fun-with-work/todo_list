import "./main-content.css";
// import { businessmanImage, checklistEditedImage } from "./image-variables";

export function createMainContent() {   

const mainContent = document.createElement("div");
mainContent.id = "main-content";
mainContent.className = "main-content";

const tasksContainer = document.createElement("div");
tasksContainer.id = "tasks-container";
tasksContainer.className = "tasks-container";
mainContent.appendChild(tasksContainer);    

const welcomeMessage = document.createElement("p");
welcomeMessage.textContent = "From chaos to order.Welcome to your task manager!";
welcomeMessage.id = "welcome-message";
tasksContainer.appendChild(welcomeMessage);

const messageInfo = document.createElement("p");
messageInfo.textContent = "Add a new task to get started or select a project from the side menu to view tasks.";
messageInfo.id = "message-info";
tasksContainer.appendChild(messageInfo);


// const tasksHeading = document.createElement("h2");
// tasksHeading.textContent = "All Tasks";
// tasksHeading.id = "tasks-heading";
// tasksContainer.appendChild(tasksHeading);  

return mainContent;

}