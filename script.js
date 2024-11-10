// Adds a task
const addTask = () => {
    const taskInput = document.getElementById("taskInput");

    if (taskInput.value) {
        const taskList = document.getElementById("taskList");

        // Create the new task
        const newTask = document.createElement("li");

        newTask.innerText = taskInput.value;

        // Create the delete button
        const deleteButton = document.createElement("button");

        deleteButton.className = "button";
        deleteButton.innerText = "x";

        deleteButton.addEventListener("click", () => {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(deleteButton);

        taskList.appendChild(newTask);

        // Reset the input text
        taskInput.value = "";
    }
};

// Set up click listener for the button
document.getElementById("submitButton").addEventListener("click", addTask);

// Set up keyboard listener for the enter key
document.getElementById("taskInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
