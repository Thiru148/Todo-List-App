import React from "react";
import { useState } from "react";
import './style.css'
import deleteIcon from './images/delete-icon.png'
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  function handleSubmit(e){
    e.preventDefault();
    if(String(newTodo).trim()!==''){
      setTodos([...todos,newTodo])
      setNewTodo('')
    }
      

  }
  const removeTask = (indexToRemove)=>{
    const newItems = todos.filter((_,index)=> index !== indexToRemove)
    setTodos(newItems);
  }

  // function handleDelete(task){
  //   newTask.findIndex(item=>item.index === task)
  //   setNewTask(newTask.splice(task, 1));
  // }
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <form  onSubmit= {handleSubmit} className="todoForm">
        <input onChange={(e)=>setNewTodo([e.target.value])} type="text" placeholder="Please Enter Todo Item" value={newTodo}></input>
        <button type="submit">Add Todo Item</button>
        <ul className="todoList"> 
      {todos.map((item,index)=>{
        return <li key={index}> {item}
                <img onClick ={()=>removeTask(index)} className ='deleteIcon'
                src={deleteIcon} alt="delete-icon">
                </img>
                </li>
      })} </ul>
      </form>
    </div>
  );
}

export default App;
