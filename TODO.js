let userInput = document.getElementById("input");
let list = document.getElementById("tasks");
let btn = document.getElementById("btn");

btn.addEventListener("click", function show() {
    let txt = userInput.value.trim();
    if (txt === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    // ✅ Task text as span
    let taskText = document.createElement("span");
    taskText.textContent = txt;
    taskText.style.cursor = "pointer";

    // ✅ Toggle 'completed' class on click
    taskText.addEventListener("click", function () {
        taskText.style.textDecoration = 'line-through';
    });

    // ✅ Delete button
    let del = document.createElement("button");
    del.textContent = "Delete";
    del.classList.add("delete-btn");
    del.style.marginLeft = "10px";

    del.addEventListener("click", function () {
        li.remove();
    });

    // ✅ Append to list
    li.appendChild(taskText);
    li.appendChild(del);
    list.appendChild(li);

    // ✅ Clear input
    userInput.value = "";
});
