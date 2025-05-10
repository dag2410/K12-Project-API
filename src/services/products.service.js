const { readDb, writeDb } = require("../../utils/file");

const RESOURCE = "products";

const getAllProducts = async () => {
  const products = await readDb(RESOURCE);
  return products;
};

const getProductById = async (id) => {
  const products = await readDb(RESOURCE);
  return products.find((product) => product.id === +id);
};

const createProduct = async (data) => {
  const products = await readDb(RESOURCE);
  const newProduct = {
    id: (products[products.length - 1]?.id ?? 0) + 1,
    name: data.name,
    description: data.description,
    stock: data.stock,
  };
  products.push(newProduct);
  await writeDb(RESOURCE, products);
  return newProduct;
};

const updateProduct = async (id, data) => {
  const products = await readDb(RESOURCE);
  const index = products.findIndex((product) => product.id === +id);
  const product = products[index];
  if (index === -1) return null;

  product = {
    ...product,
    name: data.name,
    description: data.description,
    stock: data.stock,
  };

  await writeDb(RESOURCE, products);
  return product;
};

const deleteProduct = async (id) => {
  const products = await readDb(RESOURCE);
  const index = products.findIndex((product) => product.id === +id);
  if (index === -1) return null;

  products.splice(index, 1);
  await writeDb(RESOURCE, products);
  return products;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
