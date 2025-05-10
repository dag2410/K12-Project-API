const { readDb, writeDb } = require("../../utils/file");

const RESOURCE = "categories";

const getAllCategories = async () => {
  const categories = await readDb(RESOURCE);
  return categories;
};

const getCategoryById = async (id) => {
  const categories = await readDb(RESOURCE);
  return categories.find((c) => c.id === +id);
};

const createCategory = async (data) => {
  const categories = await readDb(RESOURCE);
  const newCategory = {
    id: (categories[categories.length - 1]?.id ?? 0) + 1,
    name: data.name,
    description: data.description,
  };
  categories.push(newCategory);
  await writeDb(RESOURCE, categories);
  return newCategory;
};

const updateCategory = async (id, data) => {
  const categories = await readDb(RESOURCE);
  const index = categories.findIndex((c) => c.id === +id);
  if (index === -1) return null;

  categories[index].name = data.name;
  categories[index].description = data.description;
  await writeDb(RESOURCE, categories);
  return categories[index];
};

const deleteCategory = async (id) => {
  const categories = await readDb(RESOURCE);
  const index = categories.findIndex((c) => c.id === +id);
  if (index === -1) return null;

  categories.splice(index, 1);
  await writeDb(RESOURCE, categories);
  return true;
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
