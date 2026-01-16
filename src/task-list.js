export let allTasks = JSON.parse(localStorage.getItem("myTasks")) || [];

export function addTask(task) {
    allTasks.push(task);
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem("myTasks", JSON.stringify(allTasks));
}

export function removeTask(index) {
    allTasks.splice(index, 1);
    saveToLocalStorage();
}

export function updateTask(index, updatedTask) {
    allTasks[index] = updatedTask;
    saveToLocalStorage();
}

export function clearTasks() {
    allTasks = [];
    saveToLocalStorage();
}