import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import Componenets from './Components';
import {addTodo, deletetodo, getAlltodo} from './utils/Handleapi.js';



function App() {
  
const [todo,settodo] = useState([])
const [text,settext] = useState("");
console.log(text);


useEffect(() =>{
  getAlltodo(settodo)
},[])
  return (
    <div className="App">
     <h1>To Do App</h1>

     <div className="top">
      <input type="text" placeholder="Enter Task" 
      value={text}
      onChange={(e) => settext(e.target.value)}
      />
      
     
      <button className="btn"   onClick={() => addTodo(text,settext,settodo)}>Add</button>
      <div className="list">
{todo.map((item) => <Componenets 
key={item._id} text ={item.text}
deletetodo={() => deletetodo(item._id,settodo)}
/>)}
     </div>

     </div>

    

    </div>
  );
}

export default App;
