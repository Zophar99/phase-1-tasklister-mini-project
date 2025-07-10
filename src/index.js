// document.addEventListener("DOMContentLoaded", () => {
//   const sortDateBtn = document.getElementById("sort-date-btn");
//   sortDateBtn.addEventListener("click", () => {
//     const tasks = Array.from(document.querySelectorAll("#tasks li"));
//     tasks.sort((a, b) => {
//       const dateA = new Date(a.dataset.dueDate);
//       const dateB = new Date(b.dataset.dueDate);
//       return dateA - dateB;
//     });
//     const taskList = document.getElementById("tasks");
//     taskList.innerHTML = "";
//     tasks.forEach((task) => taskList.appendChild(task));
//   });

//const { useImperativeHandle } = require("react");

// const sortBtn= document.getElementById("sort-btn");
//   sortBtn.addEventListener("click",()=>{
//     const tasks= Array.from(document.querySelectorAll("#tasks li"));
//     tasks.sort((a, b) =>{
//       const priorityOrder= {high: 1, medium: 2, low: 3 };
//       const getPriorityValue= (li) => {
//         const color = li.style.color;
//         if (color === "red") return priorityOrder.high;
//         if (color === "orange") return priorityOrder.medium;
//         if (color === "green") return priorityOrder.low;
//         return 4;
//       }
//       return getPriorityValue(a) - getPriorityValue(b);
//     });
//     const taskList= document.getElementById("tasks")
//     taskList.innerHTML= "";
//     tasks.forEach((task)=> taskList.appendChild(task));
//     });

// const form = document.getElementById("create-task-form");
// const input = document.getElementById("new-task-description");
// const prioritySelect = document.getElementById("priority-level");
// const dateInput = document.getElementById("due-date");
// const taskList = document.getElementById("tasks");


// form.addEventListener("submit", function (event){
//   event.preventDefault();
//   const task = input.value;
//   const priority = prioritySelect.value;
//   const dueDate = dateInput.value;
//   const li = document.createElement("li");
  
//   li.textContent = `${task} (Due: ${dueDate})`;
//   li.setAttribute("data-due-date", dueDate);
//   //li.textContent = task;

//   if (priority === "high"){
//     li.style.color = "red";
//   }
//   else if (priority === "medium"){
//     li.style.color = "orange";
//   }
//   else if (priority === "low"){
//     li.style.color ="green";
//   }
//   taskList.appendChild(li);
//   input.value = "";
//   const checkbox = document.createElement  ("input");
//   checkbox.type = "checkbox";
//   checkbox.style.marginRight = "10px";
//   checkbox.addEventListener("change", () => {
//   if (checkbox.checked){
//     li.style.textDecoration = "line-through";
//   }
//   else {
//     li.style.textDecoration ="none";
//   }
//   });
//   li.prepend(checkbox);
//   //console.log("User typed:", task);
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "x";
//   deleteBtn.style.marginLeft = "6px";
//   deleteBtn.style.backgroundColor = "black";
//   deleteBtn.style.color = "white";
//   deleteBtn.style.border = "none";
//   deleteBtn.style.cursor = "not-allowed";
//   deleteBtn.addEventListener("click", () =>{
//     li.remove();
//   });
//   li.appendChild(deleteBtn);
//   taskList.appendChild(li);
//   input.value = "";
  
//   prioritySelect.value = "";
//   dateInput.value = "";
//   const editBtn = document.createElement("button");
//   editBtn.textContent = "Edit";
//   editBtn.style.marginLeft = "10px";
//   editBtn.style.backgroundColor = "green";
//   editBtn.style.color = "white";
//   editBtn.style.border ="none";
//   editBtn.style.cursor = "pointer";
//   editBtn.addEventListener("click", () =>{
//     const newTask = prompt ("Edit task:", task);
//     const newDate = prompt("Edit due date:", dueDate);
//     if(newTask !== null && newDate !== null) {
//       li.childNodes[1].nodeValue = `${newTask} (DUe: ${newDate})`;
//     }
//   });
//   li.appendChild(editBtn);
// });
// });
document.addEventListener("DOMContentLoaded", () => {
  // === SORT BY DUE DATE ===
  const sortDateBtn = document.getElementById("sort-date-btn");
  sortDateBtn.addEventListener("click", () => {
    const tasks = Array.from(document.querySelectorAll("#tasks li"));
    tasks.sort((a, b) => {
      const dateA = new Date(a.dataset.dueDate);
      const dateB = new Date(b.dataset.dueDate);
      return dateA - dateB;
    });
    const taskList = document.getElementById("tasks");
    taskList.innerHTML = "";
    tasks.forEach((task) => taskList.appendChild(task));
  });
  
const userInput = document.getElementById("task-user"); // assigned user
  // === SORT BY PRIORITY ===
  const sortBtn = document.getElementById("sort-btn");
  sortBtn.addEventListener("click", () => {
    const tasks = Array.from(document.querySelectorAll("#tasks li"));
    tasks.sort((a, b) => {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      const getPriorityValue = (li) => {
        const color = li.style.color;
        if (color === "red") return priorityOrder.high;
        if (color === "orange") return priorityOrder.medium;
        if (color === "green") return priorityOrder.low;
        return 4;
      };
      return getPriorityValue(a) - getPriorityValue(b);
    });
    const taskList = document.getElementById("tasks");
    taskList.innerHTML= "";
    tasks.forEach((task) => taskList.appendChild(task));
  });

  // === ADD NEW TASK ===
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const prioritySelect = document.getElementById("priority-level");
  const dateInput = document.getElementById("due-date");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const task = input.value;
    const priority = prioritySelect.value;
    const dueDate = dateInput.value;
    const user = userInput.value;

    // if (!task || !dueDate || !priority || !user) {
    //   alert("Please fill out all fields.");
    //   return;
    // }

    const li = document.createElement("li");
    li.textContent =`${task} (Due: ${dueDate}) - Assigned to: ${user}`
    li.setAttribute("data-due-date", dueDate);

    // === PRIORITY COLOR ===
    if (priority === "high") li.style.color = "red";
    else if (priority === "medium") li.style.color = "orange";
    else if (priority === "low") li.style.color = "green";

    // === CHECKBOX ===
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";
    checkbox.addEventListener("change", () => {
      li.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });
    li.appendChild(checkbox);

    // Set the text after checkbox so it appears after the checkbox
    const textNode = document.createTextNode(`${task} (Due: ${dueDate}) - Assigned to: ${user}`);
    li.appendChild(textNode);

    // === DELETE BUTTON ===
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.style.marginLeft = "6px";
    deleteBtn.style.backgroundColor = "black";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.cursor = "not-allowed";
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(deleteBtn);

    // === EDIT BUTTON ===

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.marginLeft = "10px";
    editBtn.style.backgroundColor = "green";
    editBtn.style.color = "white";
    editBtn.style.border ="none";
    editBtn.style.cursor = "pointer";
    editBtn.addEventListener("click", () =>{
      const newTask = prompt ("Edit task:", task);
      const newDate = prompt("Edit due date:", dueDate);
      const newUser = prompt("Edit assigned user:", user);
      if(newTask !== null && newDate !== null && newUser !== null) {
        li.childNodes[1].nodeValue = `${newTask} (Due: ${newDate}) - Assigned to: ${newUser}`;
        li.setAttribute("data-due-date", newDate);
      }
    });

    li.appendChild(editBtn);

    // === ADD TASK TO LIST ===
    taskList.appendChild(li);

    // === CLEAR FORM ===
    input.value = "";
    prioritySelect.value = "";
    dateInput.value = "";
    userInput.value = "";
  });
});
