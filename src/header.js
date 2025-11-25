import "./header.css";

const content = document.getElementById("content");

export function createHeader() {

const header = document.createElement("header");
header.id = "header";
header.className = "header";
content.appendChild(header);

const taskBar = document.createElement("div");
taskBar.id = "task-bar";
taskBar.className = "task-bar";
taskBar.textContent = "Current Project: All Tasks";
header.appendChild(taskBar);
}