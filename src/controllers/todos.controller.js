const { readDb, writeDb } = require("../../utils/file");

const RESOURCE = "todos";

const getAllTodos = async (req, res) => {
  const todos = await readDb(RESOURCE);
  res.json({
    status: "success",
    data: todos,
  });
};

const getTodoById = async (req, res) => {
  const todos = await readDb(RESOURCE);
  const todo = todos.find((t) => t.id === +req.params.id);

  if (!todo) {
    return res.status(404).json({
      status: "error",
      message: "Resource not found",
    });
  }

  res.json({
    status: "success",
    data: todo,
  });
};

const createTodo = async (req, res) => {
  const todos = await readDb(RESOURCE);
  const newTodo = {
    id: (todos[todos.length - 1]?.id ?? 0) + 1,
    title: req.body.title,
    completed: false,
  };

  todos.push(newTodo);
  await writeDb(RESOURCE, todos);

  res.status(201).json({
    status: "success",
    data: newTodo,
  });
};

const updateTodo = async (req, res) => {
  const todos = await readDb(RESOURCE);
  const todo = todos.find((t) => t.id === +req.params.id);

  if (!todo) {
    return res.status(404).json({
      status: "error",
      message: "Resource not found",
    });
  }

  if (req.body.title !== undefined) todo.title = req.body.title;
  if (req.body.completed !== undefined) todo.completed = req.body.completed;

  await writeDb(RESOURCE, todos);

  res.json({
    status: "success",
    data: todo,
  });
};

const deleteTodo = async (req, res) => {
  const todos = await readDb(RESOURCE);
  const index = todos.findIndex((t) => t.id === +req.params.id);

  if (index === -1) {
    return res.status(404).json({
      status: "error",
      message: "Resource not found",
    });
  }

  todos.splice(index, 1);
  await writeDb(RESOURCE, todos);
  res.status(204).send();
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
