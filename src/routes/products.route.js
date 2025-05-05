const express = require("express");
const productsController = require("../controllers/product.controller");
const router = express.Router();

router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getProductById);

router.post("/", productsController.createProduct);

router.put("/:id", productsController.updateProduct);

router.patch("/:id", productsController.updateProduct);

router.delete("/:id", productsController.deleteProduct);

module.exports = router;
