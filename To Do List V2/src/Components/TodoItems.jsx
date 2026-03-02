import TodoItem from "./TodoItem";


const TodoItems =({todoItems , onDeleteClick})=>{
    return <div className='items-container'>
        {todoItems.map(item=> <TodoItem 
        key={item.name}
        todoName={ item.name} todoDate={item.dueDate} onDeleteClick = {onDeleteClick}> </TodoItem>
)}
      {/* <TodoItem todoName={"Buy Milk"} todoDate={"4/5/2026"}> </TodoItem>
            <TodoItem todoName={"Go to college"} todoDate={"4/5/2026"}> </TodoItem> */}

    
    </div>;
};

export default TodoItems;


