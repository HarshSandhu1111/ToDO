import React from 'react'
import axios from 'axios';

const baseUrl= "http://localhost:5000";
const getAlltodo = (settodo) =>{
    axios.get(baseUrl)
    .then(({data}) =>{
        console.log("data ",data);
        
        settodo(data);

    })
}

const addTodo = (text,settext,settodo) =>{
axios.post(`${baseUrl}/save`, {text})
.then(({data}) =>{
    console.log("data ",data);
   
    
    settext("");
    getAlltodo(settodo);
    
})
}

const deletetodo = (_id,settodo) =>{
axios.post(`${baseUrl}/delete`,{ _id})
.then(({data}) =>{
    console.log("data ",data);
    getAlltodo(settodo);
    
})

}
export {getAlltodo,addTodo,deletetodo}
