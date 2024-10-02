const todomodel = require('../models/todomodels');
const express = require('express');
const app = express();
app.use(express.json()); // Add this line


module.exports.gettodo= async (req,res) =>{
    const toDo = await todomodel.find();
    res.send(toDo);
}

module.exports.savetodo = async (req,res) =>{
    const {text} =req.body;

const newtodo =  await todomodel
  .create({ text })
  .then((data) => {
     res.send(data);
   
     // Send the created todo data as the response
  }
);
}

module.exports.updateToDo = async (req,res) =>{
  const {_id, text}= req.body

todomodel
.findByIdAndUpdate(_id, { text })
.then(() => {
   res.send("updated ")

}
);
}

module.exports.deleteToDo = async (req,res) =>{
  const {_id, text}= req.body

todomodel
.findByIdAndDelete(_id)
.then(() => {
   res.send("deleted succesfully ")
   
 
   
}
)
}


