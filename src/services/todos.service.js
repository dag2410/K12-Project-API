// services/todos.service.js
const { readDb, writeDb } = require("../../utils/file");

const RESOURCE = "todos";

const getAllTodos = async () => {
  return await readDb(RESOURCE);
};

const getTodoById = async (id) => {
  const todos = await readDb(RESOURCE);
  return todos.find((t) => t.id === +id);
};

const createTodo = async (data) => {
  const todos = await readDb(RESOURCE);
  const newTodo = {
    id: (todos[todos.length - 1]?.id ?? 0) + 1,
    title: data.title,
    completed: false,
  };
  todos.push(newTodo);
  await writeDb(RESOURCE, todos);
  return newTodo;
};

const updateTodo = async (id, data) => {
  const todos = await readDb(RESOURCE);
  const index = todos.findIndex((t) => t.id === +id);
  const todo = todos[index];
  if (index === -1) return null;

  todo.title = data.title;
  todo.completed = data.completed;

  await writeDb(RESOURCE, todos);
  return todo;
};

const deleteTodo = async (id) => {
  const todos = await readDb(RESOURCE);
  const index = todos.findIndex((t) => t.id === +id);
  if (index === -1) return null;

  todos.splice(index, 1);
  await writeDb(RESOURCE, todos);
  return true;
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
