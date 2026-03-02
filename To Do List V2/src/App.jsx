import AddTodo from "./Components/Addtodo"
import AppName from "./Components/AppName"
import TodoItems from "./Components/TodoItems"
// import TodoItem from "./Components/TodoItem"
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage"

import "./App.css";
// import { TodoItemsContext } from "./Store/Todo.items.store";



function App() {

  // const initialTodoItems = [{
  //   name: 'Buy Milk',
  //   dueDate: "4/5/2026"
  // },
  // {
  //   name: 'Go to college',
  //   dueDate: "4/5/2026"
  // },
  // {
  //   name: 'Go to college',
  //   dueDate: "4/5/2026"
  // }
  // ]

  // const [todoItems, setTodoItems] = useState(initialTodoItems);

    const [todoItems, setTodoItems] = useState([]);


  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added : ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [...todoItems, { name: itemName , dueDate: itemDueDate}
    ];
    setTodoItems(newTodoItems);
  }   

  const handleDeleteItem = (todoName) =>{
    const newTodoItems = todoItems.filter(item => item.name !==todoName);
    setTodoItems(newTodoItems);

  }

  return(
  // <TodoItemsContext.Provider value={[]}>
  <center className=' todo-container'>
    <AppName />

    <AddTodo onNewItem={handleNewItem} />
   {todoItems.length === 0 && <WelcomeMessage ></WelcomeMessage>}
    <TodoItems todoItems={todoItems} onDeleteClick = {handleDeleteItem}></TodoItems>


  </center>
  // </TodoItemsContext.Provider>
)
}

export default App
