function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskItem.onclick = function() {
            taskItem.parentNode.removeChild(taskItem);
        };
        taskList.appendChild(taskItem);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
