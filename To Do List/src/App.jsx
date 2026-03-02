import AddTodo from "./Components/Addtodo"
import AppName from "./Components/AppName"
import TodoItems from "./Components/TodoItems"
// import TodoItem from "./Components/TodoItem"

import "./App.css";


function App() {

  const todoItems = [{
    name:'Buy Milk',
    dueDate:"4/5/2026"
  },
{
    name:'Go to college',
    dueDate:"4/5/2026"
  },
  {
    name:'Go to college',
    dueDate:"4/5/2026"
  }
]


  return <center className=' todo-container'>
    <AppName />
    
    <AddTodo />
    <TodoItems todoItems={todoItems}></TodoItems>
    
    
  </center>
}

export default App
