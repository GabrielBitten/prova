const button = document.getElementsByClassName("MyButton")

const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")

todoForm.addEventListener("submit", (e) =>{
    e.preventDefault()
  
    const inputValue = todoInput.value
  
    if(inputValue){
     saveTodo(inputValue)
    }
   
  })
  const saveTodoLocalStorage = (todo) => {
    const todos = getTodosLocalStorage();
  
    todos.push(todo);
  
    localStorage.setItem("todos", JSON.stringify(todos));
  };
    