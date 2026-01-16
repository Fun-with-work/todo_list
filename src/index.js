import "./styles.css";

import { createHeader } from "./header.js";
import { createSideMenu, addTaskButton } from "./side-menu.js";
import { createMainContent } from "./main-content.js";
import { createFooter } from "./footer.js";

const content = document.getElementById("content");
const headerElement = createHeader();
const sideMenuElement = createSideMenu();
const mainContentElement = createMainContent();
const footerElement = createFooter();

const mainLayout = document.createElement("div");
mainLayout.id = "main-layout";
mainLayout.className = "main-layout";

content.appendChild(mainLayout);
mainLayout.appendChild(sideMenuElement);
mainLayout.appendChild(mainContentElement);

import "./add-todo.js";