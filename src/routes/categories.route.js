const express = require("express");
const categoriesController = require("@/controllers/categories.controller");
const {
  createCategoryValidator,
  updateCategoryValidator,
} = require("@/validators/categories.validator");

const router = express.Router();

router.get("/", categoriesController.getAllCategories);

router.get("/:id", categoriesController.getCategoryById);

router.post("/", createCategoryValidator, categoriesController.createCategory);

router.put(
  "/:id",
  updateCategoryValidator,
  categoriesController.updateCategory
);

router.patch(
  "/:id",
  updateCategoryValidator,
  categoriesController.updateCategory
);

router.delete("/:id", categoriesController.deleteCategory);

module.exports = router;
