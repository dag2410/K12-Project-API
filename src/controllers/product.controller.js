const { readDb, writeDb } = require("../../utils/file");

const RESOURCE = "products";

const getAllProducts = async (req, res) => {
  const products = readDb(RESOURCE);
  res.json({
    status: "success",
    data: products,
  });
};

const getProductById = async (req, res) => {
  const products = await readDb(RESOURCE);
  const product = products.find((product) => product.id === +req.params.id);

  if (!product) {
    res.status(404).json({
      status: "error",
      message: "Resource not found",
    });
    return;
  }

  res.json({
    status: "success",
    data: product,
  });
};

const createProduct = async (req, res) => {
  const products = await readDb(RESOURCE);
  const newProduct = {
    id: (products[products.length - 1]?.id ?? 0) + 1,
    name: req.body.name,
    description: req.body.description,
    stock: parseInt(req.body.stock, 10),
  };

  products.push(newProduct);
  await writeDb(RESOURCE, products);

  res.status(201).json({
    status: "success",
    data: newProduct,
  });
};

const updateProduct = async (req, res) => {
  const products = await readDb(RESOURCE);
  const product = products.find((product) => product.id === +req.params.id);

  if (!product) {
    res.status(404).json({
      status: "error",
      message: "Resource not found",
    });
    return;
  }

  product.name = req.body.name;
  product.description = req.body.description;
  (product.stock = parseInt(req.body.stock, 10)),
    await writeDb(RESOURCE, products);

  res.json({
    status: "success",
    data: product,
  });
};

const deleteProduct = async (req, res) => {
  const products = await readDb(RESOURCE);
  const index = products.findIndex((product) => product.id === +req.body.id);

  if (index === -1) {
    res.status(404).json({
      status: "error",
      message: "Resource not found",
    });
    return;
  }

  products.splice(index, 1);
  writeDb(RESOURCE, products);
  res.status(204).send();
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
