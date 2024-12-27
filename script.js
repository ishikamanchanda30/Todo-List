const todoList = [
  {
    id: 1,
    name: "make dinner",
    dueDate: "27-12-2024",
  },
];
renderTodoList();

function addTodo() {
  let todoEle = document.querySelector(".js-name-input");
  let name = todoEle.value;

  let dateEle = document.querySelector(".js-date-input");
  let dueDate = dateEle.value;

  const totalTodo = todoList.length;
  todoList.push({
    id: totalTodo + 1,
    name,
    dueDate,
  });

  console.log(todoList);
  todoEle.value = " ";
  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    const { id, name, dueDate } = todoObject;

    const html = `
            <div id="js-delete-todo-${i}">
                ${i} 
            </div>
            <div id="js-delete-todo-${i}">
                ${name} 
            </div>

            <div id ="js-delete-todo-${i}">
                ${dueDate} 
            </div>
            <button id="js-delete-todo-${i}" onclick="deleteTodo(${i})" class="delete-todo-button"> Delete </button> 
        `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-container").innerHTML = todoListHTML;
}

function deleteTodo(i) {
  console.log(todoList[i]);
  todoList.splice(i, 1);
  renderTodoList();
  console.log(todoList);
}
