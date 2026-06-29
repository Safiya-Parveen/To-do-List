import { useState } from "react";

const DashBoard = () => {
  const[tasks,setTasks]=useState([]);
  const[task,setTask]=useState("");

  const addTask=()=>{
    setTasks([...tasks,{
      text:task,
      completed:false
    }]);
    setTask("");
  }
  const deleteTask=(indexToDelete)=>{
     const updatedTasks = tasks.filter((item,index)=> index!==indexToDelete);
     setTasks(updatedTasks);
  }
  const toggleComplete=(index)=>{
   const updatedTasks=tasks.map((item,i)=>{
    if(i==index){
      return{
        ...item,
        completed:!item.completed,
      };
    }
    return item;
   });
   setTasks(updatedTasks);

  };


  return (
    <div className="All"> 
       <div className="head">
         <h1>My Todo List 📋</h1>
         <h4>Add Tasks, stay productive and get things done!</h4>
       </div>
       
       <div className="searchbar">
        <input type="search" className="bar" placeholder="Enter a task..." value={task} onChange={(e)=>setTask(e.target.value)}/>
        <input type="button" className="button" onClick={addTask} value="Add" />
       </div>

       {tasks.map((item,index)=>(
          <div key={item} className="taskbar">
            <input type="checkbox" checked={item.completed} onChange={()=>toggleComplete(index)}/>
            <span style={{textDecoration:item.completed?"line-through":"none"}} >{item.text}</span>
            <button className="button1" onClick={()=>deleteTask(index)}>Delete</button>
          </div>
       ))}
    </div>
  )
}

export default DashBoard
