const taskTitle = document.getElementById("taskTitle");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

const API_URL = "http://localhost:8080/tasks"; 

document.addEventListener("DOMContentLoaded", loadTasks);

addTaskBtn.addEventListener("click", async () => {
    const title = taskTitle.value.trim();
    if (title === "") return;

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false })
    });

    if (response.ok) {
        taskTitle.value = "";
        loadTasks();
    }
});

async function loadTasks() {
    taskList.innerHTML = "";
    const response = await fetch(API_URL);
    const tasks = await response.json();

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span contenteditable="true">${task.title}</span>
            <button onclick="updateTask(${task.id}, this)">✏️</button>
            <button onclick="deleteTask(${task.id})">❌</button>
        `;
        taskList.appendChild(li);
    });
}

async function updateTask(id, btn) {
    const newTitle = btn.parentElement.querySelector("span").textContent.trim();

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle, completed: false })
    });

    loadTasks();
}

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    loadTasks();
}
