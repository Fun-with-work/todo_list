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
welcomeMessage.textContent = "From chaos to order";
welcomeMessage.id = "welcome-message";
tasksContainer.appendChild(welcomeMessage);

const welcomeMessage2 = document.createElement("p");
welcomeMessage2.textContent = "WELCOME TO YOUR TASK MANAGER!";
welcomeMessage2.id = "welcome-message2";
tasksContainer.appendChild(welcomeMessage2);

const messageInfo = document.createElement("p");
messageInfo.textContent = "Press the New Task button to get started or Projects to view current tasks";
messageInfo.id = "message-info";
tasksContainer.appendChild(messageInfo);


// const tasksHeading = document.createElement("h2");
// tasksHeading.textContent = "All Tasks";
// tasksHeading.id = "tasks-heading";
// tasksContainer.appendChild(tasksHeading);  

return mainContent;

}