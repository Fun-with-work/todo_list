import "./side-menu.css";

const sideMenu = document.createElement("div");
sideMenu.id = "side-menu";
sideMenu.className = "side-menu";
document.body.appendChild(sideMenu);

const sideMenuHeading = document.createElement("h4");
sideMenuHeading.textContent = "Side Menu";
sideMenuHeading.id = "side-menu-heading";
sideMenu.appendChild(sideMenuHeading);

const sideMenuContent = document.createElement("div");
sideMenuContent.id = "side-menu-content";
sideMenuContent.className = "side-menu-content";
sideMenu.appendChild(sideMenuContent);

const addTaskButton = document.createElement("button");
addTaskButton.textContent = "Add Task";
addTaskButton.id = "add-task-button";
sideMenuContent.appendChild(addTaskButton);

const searchButton = document.createElement("button");
searchButton.textContent = "Search";
searchButton.id = "search-button";
sideMenuContent.appendChild(searchButton);
