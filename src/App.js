import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[text,setText]= useState("");
  const[todos,setTodos]= useState([]);
  const[IndexNum,setIndexNum]= useState();




  let add=()=>{
    if(IndexNum > -1){
    todos[IndexNum]= text
   setTodos([...todos]);

   setIndexNum(-1);
  } else{
    setText("");
    setTodos([...todos,text]);
  }
  };


  let deleteTodo=(todoIndex)=>{
    const todosClone=[...todos];
    todosClone.splice(todoIndex,1);
    setTodos(todosClone);
  };


   let editTodo=(i)=>{
    setIndexNum(i)
    setText(todos[i]);
   };

   
    
  return (
    <div className="App">
      <header className="App-header">
       <h1>state</h1>
       
       <input 
       value={text}
       onChange={(e)=> setText(e.target.value)}
       placeholder=' enter value'/>
       <button onClick={()=>add('inp')}>add</button>

       
       <div>
        {todos.map((todo,index)=>(
          <div>
            <p key={index}>{todo}</p>
            <button onClick={()=>deleteTodo(index)}>delete</button>
            <button onClick={()=>editTodo(index)}>edit</button>
          </div>
        
          ))}
       </div>
      </header>
    </div>
  );
}

export default App;
