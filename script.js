let todoDataUncomplete = [];
let todoCompleted = [];
const addButton = document.getElementById("add-button");
const inputElement = document.getElementById("task-name");
const taskContainerElement = document.getElementById("tasks-container");
const taskleftElement = document.getElementById("tasks-left");
const clearCompletedElement = document.getElementById("clear-completed");
const completeAllTasks = document.getElementById("Complete-all-tasks");
const AllElement = document.getElementById("All");
const UncompleteElement = document.getElementById("Uncomplete");
const completedElement = document.getElementById("Completed");

function taskAddition() {
  if (inputElement.value.length > 0) {
    const task = inputElement.value.trim();
    todoDataUncomplete.push(task);
    inputElement.value = "";
    addButton.style.opacity = "0.4";
    displayTaskContainer("Uncomplete");
  }
}

function displayTaskContainer(type) {
  console.log(todoDataUncomplete);
  taskContainerElement.innerHTML = "";
  switch (type) {
    case "Uncomplete":
      taskContainerElement.innerHTML = "<h3>Uncompleted Tasks</h3>";
      todoDataUncomplete.forEach((task, index) => {
        // Create task container div
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        // Create radio button
        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.id = `radio-${index}`;
        radioButton.name = `radio-group`;

        // Create custom radio div
        const customRadio = document.createElement("div");
        customRadio.classList.add("custom-radio");
        customRadio.addEventListener("click", () => {
          if (radioButton.classList.contains("custom-checked")) {
            radioButton.classList.remove("custom-checked");
          } else {
            document
              .querySelectorAll('input[name="radio-group"')
              .forEach((input) => input.classList.remove("custom-checked"));
            radioButton.classList.add("custom-checked");
          }
        });

        // Create label
        const label = document.createElement("label");
        label.setAttribute("for", `radio-${index}`);

        // Create image div
        const image = document.createElement("div");
        image.classList.add("cross-img");
        image.innerHTML = `<i class="fa-regular fa-circle-check tick-button"></i>
            <i class="fa-regular fa-circle-xmark remove-button"></i>`;

        // Append elements to label
        label.appendChild(radioButton);
        label.appendChild(customRadio);
        label.appendChild(document.createTextNode(`${task}`));

        // Append elements to task container
        taskContainer.appendChild(label);
        taskContainer.appendChild(image);

        // Append task container to tasks container
        taskContainerElement.appendChild(taskContainer);

        // Update tasks left element
        updateTasksLeft();

        // Add event listner for remove and tick button
        image
          .querySelector(".remove-button")
          .addEventListener("click", () => removeTask(index));
        image.querySelector(".tick-button").addEventListener("click", () => {
          todoCompleted.push(todoDataUncomplete[index]);
          console.log(todoCompleted);
          removeTask(index);
        });
      });
      break;

    case "completed":
      taskContainerElement.innerHTML = "<h3>Completed Tasks</h3>";
      todoCompleted.forEach((task, index) => {
        // Create task container div
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        // Create radio button
        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.id = `radio-${index}`;
        radioButton.name = `radio-group`;

        // Create custom radio div
        const customRadio = document.createElement("div");
        customRadio.classList.add("custom-radio");
        customRadio.addEventListener("click", () => {
          if (radioButton.classList.contains("custom-checked")) {
            radioButton.classList.remove("custom-checked");
          } else {
            document
              .querySelectorAll('input[name="radio-group"')
              .forEach((input) => input.classList.remove("custom-checked"));
            radioButton.classList.add("custom-checked");
          }
        });

        // Create label
        const label = document.createElement("label");
        label.setAttribute("for", `radio-${index}`);

        // Append elements to label
        label.appendChild(radioButton);
        label.appendChild(customRadio);
        label.appendChild(document.createTextNode(`${task}`));

        // Append elements to task container
        taskContainer.appendChild(label);

        // Append task container to tasks container
        taskContainerElement.appendChild(taskContainer);

        // Update tasks left element
        updateTasksLeft();
      });
      break;

    default:
      taskContainerElement.innerHTML = "<h3>Uncompleted Tasks</h3>";
      todoDataUncomplete.forEach((task, index) => {
        // Create task container div
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        // Create radio button
        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.id = `radio-${index}`;
        radioButton.name = `radio-group`;

        // Create custom radio div
        const customRadio = document.createElement("div");
        customRadio.classList.add("custom-radio");
        customRadio.addEventListener("click", () => {
          if (radioButton.classList.contains("custom-checked")) {
            radioButton.classList.remove("custom-checked");
          } else {
            document
              .querySelectorAll('input[name="radio-group"')
              .forEach((input) => input.classList.remove("custom-checked"));
            radioButton.classList.add("custom-checked");
          }
        });

        // Create label
        const label = document.createElement("label");
        label.setAttribute("for", `radio-${index}`);

        // Create image div
        const image = document.createElement("div");
        image.classList.add("cross-img");
        image.innerHTML = `<i class="fa-regular fa-circle-check tick-button"></i>
            <i class="fa-regular fa-circle-xmark remove-button"></i>`;

        // Append elements to label
        label.appendChild(radioButton);
        label.appendChild(customRadio);
        label.appendChild(document.createTextNode(`${task}`));

        // Append elements to task container
        taskContainer.appendChild(label);
        taskContainer.appendChild(image);

        // Append task container to tasks container
        taskContainerElement.appendChild(taskContainer);

        // Update tasks left element
        updateTasksLeft();

        // Add event listner for remove and tick button
        image
          .querySelector(".remove-button")
          .addEventListener("click", () => removeTask(index));
        image.querySelector(".tick-button").addEventListener("click", () => {
          todoCompleted.push(todoDataUncomplete[index]);
          console.log(todoCompleted);
          removeTask(index);
        });
      });

      const completedHeading = document.createElement("h3");
      completedHeading.textContent = "Completed Tasks";
      taskContainerElement.append(completedHeading);
      todoCompleted.forEach((task, index) => {
        // Create task container div
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        // Create radio button
        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.id = `radio-${index}`;
        radioButton.name = `radio-group`;

        // Create custom radio div
        const customRadio = document.createElement("div");
        customRadio.classList.add("custom-radio");
        customRadio.addEventListener("click", () => {
          if (radioButton.classList.contains("custom-checked")) {
            radioButton.classList.remove("custom-checked");
          } else {
            document
              .querySelectorAll('input[name="radio-group"')
              .forEach((input) => input.classList.remove("custom-checked"));
            radioButton.classList.add("custom-checked");
          }
        });

        // Create label
        const label = document.createElement("label");
        label.setAttribute("for", `radio-${index}`);

        // Append elements to label
        label.appendChild(radioButton);
        label.appendChild(customRadio);
        label.appendChild(document.createTextNode(`${task}`));

        // Append elements to task container
        taskContainer.appendChild(label);

        // Append task container to tasks container
        taskContainerElement.appendChild(taskContainer);

        // Update tasks left element
        updateTasksLeft();
      });
  }
}

function updateTasksLeft() {
  taskleftElement.innerHTML = "";
  taskleftElement.textContent =
    todoDataUncomplete.length > 0
      ? `${todoDataUncomplete.length} tasks left`
      : "";
}

function removeTask(index) {
  todoDataUncomplete.splice(index, 1);
  displayTaskContainer("Uncomplete");
  updateTasksLeft();
}

inputElement.addEventListener("input", () => {
  addButton.style.opacity = inputElement.value.length <= 0 ? "0.4" : "1";
});

inputElement.addEventListener("keypress", (event) => {
  if (inputElement.value.length > 0 && event.key === "Enter") {
    taskAddition();
  }
});

addButton.addEventListener("click", taskAddition);

clearCompletedElement.addEventListener("click", () => {
  if (todoCompleted.length > 0) {
    todoCompleted = [];
    displayTaskContainer("completed");
    alert("Completed tasks cleared.");
  } else {
    alert("There is no completed task.");
  }
});

completeAllTasks.addEventListener("click", () => {
  if (todoDataUncomplete.length > 0) {
    console.log(todoCompleted + ", " + todoDataUncomplete);
    todoCompleted = [...todoCompleted, ...todoDataUncomplete];
    todoDataUncomplete = [];
    console.log(todoCompleted);
    updateTasksLeft();
    displayTaskContainer("Uncomplete");
  } else {
    alert("No Uncomplete tasks remaining.");
  }
});

UncompleteElement.addEventListener("click", () =>
  displayTaskContainer("Uncomplete")
);
completedElement.addEventListener("click", () =>
  displayTaskContainer("completed")
);
AllElement.addEventListener("click", () => displayTaskContainer(""));
