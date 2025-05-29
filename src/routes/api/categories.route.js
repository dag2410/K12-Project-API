const express = require("express");
const categoriesController = require("@/controllers/api/categories.controller");
const {
  createCategoryValidator,
  updateCategoryValidator,
} = require("@/validators/api/categories.validator");
const attachResourceLoader = require("../../utils/attachResourceLoader");

const router = express.Router();
attachResourceLoader(router, ["categories"]);

router.get("/", categoriesController.getList);
router.get("/:categories", categoriesController.getOne);
router.post("/", createCategoryValidator, categoriesController.create);
router.put(
  "/:categories",
  updateCategoryValidator,
  categoriesController.update
);
router.patch(
  "/:categories",
  updateCategoryValidator,
  categoriesController.update
);
router.delete("/:categories", categoriesController.remove);

module.exports = router;
