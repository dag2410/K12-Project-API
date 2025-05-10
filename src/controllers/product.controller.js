const { readDb, writeDb } = require("../../utils/file");
const productsService = require("@/services/products.service");
const { success } = require("../../utils/response");
const throwError = require("../../utils/throwError");

const getAllProducts = async (req, res) => {
  const products = await productsService.getAllProducts();
  success(res, 200, products);
};

const getProductById = async (req, res) => {
  const product = await productsService.getProductById(req.params.id);
  if (!product) throwError(404, "Not found product.");
  success(res, 200, product);
};

const createProduct = async (req, res) => {
  const newProduct = await productsService.createProduct(req.body);
  success(res, 200, newProduct);
};

const updateProduct = async (req, res) => {
  const product = await productsService.updateProduct(req.params.id, req.body);
  if (!product) throwError(404, "Not found product.");
  success(res, 200, product);
};

const deleteProduct = async (req, res) => {
  const result = await productsService.deleteProduct(req.params.id);

  if (!result) throwError(404, "Not found product.");
  res.status(204).send();
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
