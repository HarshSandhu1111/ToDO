const {Router} =  require("express");
const {gettodo, savetodo, updateToDo, deleteToDo} = require("../controllers/todocontrollers"); 
const routers =  Router()

routers.get("/",gettodo);
routers.post("/save",savetodo);
routers.post("/update",updateToDo);
routers.post("/delete",deleteToDo);





module.exports = routers;