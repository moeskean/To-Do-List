const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskText = input.value;

    const li = document.createElement("li");

    li.textContent = taskText;

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    input.value = "";
});