const express = require("express");
const categoriesController = require("@/controllers/categories.controller");
const {
  createCategoryValidator,
  updateCategoryValidator,
} = require("@/validators/categories.validator");
const attachResourceLoader = require("../../utils/attachResourceLoader");

const router = express.Router();
attachResourceLoader(router, ["categories"]);

router.get("/", categoriesController.getList);

router.get("/:categories", categoriesController.getOne);

router.post("/", createCategoryValidator, categoriesController.create);

router.put(
  "/:categories",
  updateCategoryValidator,
  categoriesController.updated
);

router.patch(
  "/:categories",
  updateCategoryValidator,
  categoriesController.updated
);

router.delete("/:categories", categoriesController.remove);

module.exports = router;
