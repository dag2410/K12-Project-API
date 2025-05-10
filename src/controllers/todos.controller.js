// controllers/todos.controller.js
const { success } = require("../../utils/response");
const throwError = require("../../utils/throwError");
const todosService = require("@/services/todos.service");

const getAllTodos = async (req, res) => {
  const todos = await todosService.getAllTodos();
  success(res, 200, todos);
};

const getTodoById = async (req, res) => {
  const todo = await todosService.getTodoById(req.params.id);
  if (!todo) throwError(404, "Resource not found");
  success(res, 200, todo);
};

const createTodo = async (req, res) => {
  const newTodo = await todosService.createTodo(req.body);
  success(res, 201, newTodo);
};

const updateTodo = async (req, res) => {
  const todo = await todosService.updateTodo(req.params.id, req.body);
  if (!todo) throwError(404, "Resource not found");
  success(res, 200, todo);
};

const deleteTodo = async (req, res) => {
  const result = await todosService.deleteTodo(req.params.id);
  if (!result) throwError(404, "Resource not found");
  res.status(204).send();
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
