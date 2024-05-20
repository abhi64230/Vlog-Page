const express =require("express");
const router = express.Router();
//import controller
// const { createTodo } = require("../controllers/createTodo");

const {createTodo,getTodo,getTodoById, updateTodo,deleteTodo } = require("../controllers/getTodo");

//define api router
router.post("/createtodo", createTodo);

router.get("/gettodos", getTodo); 
router.get("/getTodos/:id", getTodoById);
router.put("/putTodos/:id", updateTodo );
router.delete("/deleteTodo/:id", deleteTodo);
  
module.exports =router;