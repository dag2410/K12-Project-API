const { success } = require("../../utils/response");
const throwError = require("../../utils/throwError");
const categoriesService = require("@/services/categories.service");

const getAllCategories = async (req, res) => {
  const categories = await categoriesService.getAllCategories();
  success(res, 200, categories);
};

const getCategoryById = async (req, res) => {
  const category = await categoriesService.getCategoryById(req.params.id);
  if (!category) throwError(404, "Not found");
  success(res, 200, category);
};

const createCategory = async (req, res) => {
  const newCategory = await categoriesService.createCategory(req.body);
  success(res, 201, newCategory);
};

const updateCategory = async (req, res) => {
  const updated = await categoriesService.updateCategory(
    req.params.id,
    req.body
  );
  if (!updated) throwError(404, "Not found");
  success(res, 200, updated);
};

const deleteCategory = async (req, res) => {
  const result = await categoriesService.deleteCategory(req.params.id);
  if (!result) throwError(404, "Not found");
  res.status(204).send();
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
