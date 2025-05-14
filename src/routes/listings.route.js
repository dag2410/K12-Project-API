const express = require("express");
const listingsController = require("@/controllers/listings.controller");
const attachResourceLoader = require("../../utils/attachResourceLoader");
const {
  createListingValidator,
  updateListingValidator,
} = require("@/validators/listings.validator");
const router = express.Router();

attachResourceLoader(router, ["listing"]);

router.get("/", listingsController.getList);
router.get("/:listing", listingsController.getOne);

router.post("/", createListingValidator, listingsController.create);

router.put("/:listing", updateListingValidator, listingsController.update);

router.patch("/:listing", updateListingValidator, listingsController.update);

router.delete("/:listing", listingsController.remove);

module.exports = router;
