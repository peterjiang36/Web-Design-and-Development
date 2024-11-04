document.addEventListener("DOMContentLoaded", function() {

    const taskInput = document.getElementById("taskinput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function(){
        const taskValue = taskInput.ariaValueMax.trim();

        if (taskValue.length) {
            const listItem = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", function(){
                if (checkbox.checked) {
                    listItem.classList.add("completed");
                } else {
                    listItem.classList.remove("completed")
                }
            });

            listItem.appendChild(checkbox);
            listItem.appendChild(document.createTextNode(taskValue));

            taskList.appendChild(listItem);

            taskInput.value = "";
        }
    })
});