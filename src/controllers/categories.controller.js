const { readDb, writeDb } = require("../../utils/file");

const RESOURCE = "categories";

const categories = [];

const getAllCategories = async (req, res) => {
  const categories = await readDb(RESOURCE);
  res.json({
    status: "success",
    data: categories,
  });
};

const getCategoryById = async (req, res) => {
  const categories = await readDb(RESOURCE);
  const category = categories.find(
    (category) => category.id === +req.params.id
  );

  if (!category) {
    res.json({
      status: "error",
      message: "Resource not found ",
    });

    return;
  }
  res.json({
    status: "success",
    data: category,
  });
};

const createCategory = async (req, res) => {
  const categories = await readDb(RESOURCE);

  const newCategory = {
    id: (categories[categories.length - 1]?.id ?? 0) + 1,
    name: req.body.name,
    description: req.body.description,
  };

  categories.push(newCategory);
  await writeDb(RESOURCE, categories);

  res.status(201).json({
    status: "success",
    data: newCategory,
  });
};

const updateCategory = async (req, res) => {
  const categories = await readDb(RESOURCE);
  const category = categories.find((category) => category.id === +req.body.id);

  if (!category) {
    res.status(404).json({
      status: "error",
      message: "Resource not found",
    });
    return;
  }

  category.name = req.body.name;
  category.description = req.body.name;

  await writeDb(RESOURCE, categories);

  res.json({
    status: "success",
    data: category,
  });
};

const deleteCategory = async (req, res) => {
  const categories = await readDb(RESOURCE);
  const index = categories.findIndex(
    (category) => category.id === +req.params.id
  );

  if (index === -1) {
    res.status(404).json({
      status: "error",
      message: "Resource not found",
    });
    return;
  }

  categories.splice(index, 1);
  await writeDb(RESOURCE, categories);

  res.status(204).send();
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
