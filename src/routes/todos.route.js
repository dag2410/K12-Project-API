const express = require("express");

const router = express.Router();

const todosController = require("@/controllers/todos.controller");
const {
  createTodoValidator,
  updateTodoValidator,
} = require("@/validators/todos.validator");

router.get("/", todosController.getAllTodos);

router.get("/:id", todosController.getTodoById);

router.post("/", createTodoValidator, todosController.createTodo);

router.put("/:id", updateTodoValidator, todosController.updateTodo);

router.patch("/:id", updateTodoValidator, todosController.updateTodo);

router.delete("/:id", todosController.deleteTodo);

module.exports = router;
