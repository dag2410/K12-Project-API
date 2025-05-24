const express = require("express");
const roomsController = require("@/controllers/admin/rooms.controller");

const router = express.Router();

router.get("/", roomsController.index);
router.get("/create", roomsController.create);
router.get("/:id", roomsController.show);
router.post("/", roomsController.store);
router.get("/:id/edit", roomsController.edit);
router.post("/:id", roomsController.update);

module.exports = router;
