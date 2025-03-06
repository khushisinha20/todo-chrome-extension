// const taskTitle = document.getElementById("taskTitle");
// const addTaskBtn = document.getElementById("addTask");
// const taskList = document.getElementById("taskList");

// const API_URL = "http://localhost:8080/tasks"; 

// document.addEventListener("DOMContentLoaded", loadTasks);
// addTaskBtn.addEventListener("click", addTask);

// async function addTask() {
//     const title = taskTitle.value.trim();
//     if (title === "") return;

//     const response = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, completed: false })
//     });

//     if (response.ok) {
//         taskTitle.value = "";
//         loadTasks();
//     }
// }

// async function loadTasks() {
//     taskList.innerHTML = "";
//     const response = await fetch(API_URL);
//     const tasks = await response.json();

//     tasks.forEach(task => {
//         const li = document.createElement("li");

//         const span = document.createElement("span");
//         span.textContent = task.title;
//         span.contentEditable = true;
//         span.classList.add("editable");

//         const updateBtn = document.createElement("button");
//         updateBtn.textContent = "✏️";
//         updateBtn.classList.add("edit-btn");
//         updateBtn.addEventListener("click", () => updateTask(task.id, span));

//         const deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "❌";
//         deleteBtn.classList.add("delete-btn");
//         deleteBtn.addEventListener("click", () => deleteTask(task.id));

//         li.appendChild(span);
//         li.appendChild(updateBtn);
//         li.appendChild(deleteBtn);
//         taskList.appendChild(li);
//     });
// }

// async function updateTask(id, span) {
//     const newTitle = span.textContent.trim();
//     if (!newTitle) return;

//     await fetch(`${API_URL}/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title: newTitle, completed: false })
//     });

//     loadTasks();
// }

// async function deleteTask(id) {
//     await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//     loadTasks();
// }

const taskTitle = document.getElementById("taskTitle");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

const API_URL = "http://localhost:8080/tasks"; 

document.addEventListener("DOMContentLoaded", loadTasks);
addTaskBtn.addEventListener("click", addTask);

async function addTask() {
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
}

async function loadTasks() {
    taskList.innerHTML = "";
    const response = await fetch(API_URL);
    const tasks = await response.json();

    tasks.forEach(task => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.title;
        span.contentEditable = true;
        span.classList.add("editable");

        // Create Update Button (Replaces Pencil Icon)
        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        updateBtn.classList.add("edit-btn");
        updateBtn.addEventListener("click", () => updateTask(task.id, span));

        // Create Delete Button (Replaces Cross Icon)
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => deleteTask(task.id));

        li.appendChild(span);
        li.appendChild(updateBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

async function updateTask(id, span) {
    const newTitle = span.textContent.trim();
    if (!newTitle) return;

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
