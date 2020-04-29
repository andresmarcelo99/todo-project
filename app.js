//Selectors
const todo_Input = document.querySelector(".todo-input");
const todo_Button = document.querySelector(".todo-button");
const todo_List = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todo_Button.addEventListener("click", addTodo);
todo_List.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(event) {
  //prevent from submitting
  event.preventDefault();
  //TODO div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todo_Input.value;
  newTodo.classList.add("todo-list");

  //inserting li into div
  todoDiv.appendChild(newTodo);

  //check mark button
  const completed_button = document.createElement("button");
  completed_button.innerHTML = '<i class="fas fa-check"></i>';
  completed_button.classList.add("complete-btn");
  todoDiv.appendChild(completed_button);

  //delete button
  const delete_button = document.createElement("button");
  delete_button.innerHTML = '<i class="fas fa-trash"></i>';
  delete_button.classList.add("delete-btn");
  todoDiv.appendChild(delete_button);

  //append to list
  todo_List.appendChild(todoDiv);
  //clear form
  todo_Input.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  //delete todo
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    //removes after animation
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //check
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(event) {
  const todos = todo_List.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "remaining":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
