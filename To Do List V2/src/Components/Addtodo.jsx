// import { useState,useRef } from "react";
import { useState } from "react";


function AddTodo({onNewItem}){

      const [todoName,setTodoName] = useState("");
      const [dueDate,setDueDate] = useState("");
      // const noOfUpdaates = useRef();

      const handleNameChange = (event)=>{
setTodoName(event.target.value);
// noOfUpdaates.current +=1;
      };

      
      const handleDateChange = (event)=>{
            setDueDate(event.target.value);

      };

      const handleButtonClicked = ()=>{
onNewItem(todoName,dueDate);
setDueDate("");
setTodoName("");
      };
return (
<div class="container text-center">
      <div classN ame="row kg-row">
            
         <div className="col-6">
          <input type="text" placeholder="Enter Todo here" 
          value={todoName} onChange={handleNameChange}/>
         </div>
        
        <div className="col-4" ><input type="date" value={dueDate} onChange={handleDateChange}/>
        </div>
         <div className="col-2"><button type="button" class="btn btn-success kg-button"
         onClick={handleButtonClicked}
         >Add</button></div>
         
      </div>
      </div>
);
}

export default AddTodo;