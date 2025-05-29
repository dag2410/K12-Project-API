const categoriesService = require("@/services/categories.service");
const { success } = require("../../utils/response");

const getList = async (req, res) => {
  const categories = await categoriesService.getAll();
  success(res, 200, categories);
};

const getOne = async (req, res) => {
  success(res, 200, req.categories);
};

const create = async (req, res) => {
  const newCategory = await categoriesService.create(req.body);
  success(res, 201, newCategory);
};

const update = async (req, res) => {
  const categories = await categoriesService.update(
    req.categories.id,
    req.body
  );
  success(res, 200, categories);
};

const remove = async (req, res) => {
  const result = await categoriesService.remove(req.categories.id);
  success(res, 200);
};

module.exports = {
  getList,
  getOne,
  create,
  update,
  remove,
};
