import "./side-menu.css";


const addTaskButton = document.createElement("button");
addTaskButton.textContent = "NEW TASK";
addTaskButton.className = "project-buttons";
addTaskButton.id = "add-task-button";

export { addTaskButton };

export function createSideMenu() {
const sideMenu = document.createElement("div");
sideMenu.id = "side-menu";
sideMenu.className = "side-menu";

const sideMenuHeading = document.createElement("h5");
sideMenuHeading.textContent = "SIDE MENU";
sideMenuHeading.id = "side-menu-heading";
sideMenu.appendChild(sideMenuHeading);

const sideMenuContent = document.createElement("div");
sideMenuContent.id = "side-menu-content";
sideMenuContent.className = "side-menu-content";
sideMenu.appendChild(sideMenuContent);


sideMenuContent.appendChild(addTaskButton);

const searchButton = document.createElement("button");
searchButton.textContent = "SEARCH 🔎";
searchButton.className = "project-buttons";
searchButton.id = "search-button";
sideMenuContent.appendChild(searchButton);

const myProjects = document.createElement("div");
myProjects.textContent = "PROJECTS";
myProjects.id = "projects-section";
sideMenuContent.appendChild(myProjects);

return sideMenu;
}
 

