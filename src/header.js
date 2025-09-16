import "./header.css";

const header = document.createElement("header");
header.id = "header";
header.className = "header";
document.body.appendChild(header);

const taskBar = document.createElement("div");
taskBar.id = "task-bar";
taskBar.className = "task-bar";
taskBar.textContent = "Current Project: All Tasks";
header.appendChild(taskBar);
