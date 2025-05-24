const express = require("express");
const roomsController = require("@/controllers/api/rooms.controller");
const attachResourceLoader = require("../../../utils/attachResourceLoader");
const {
  createRoomValidator,
  updateRoomValidator,
} = require("@/validators/rooms.validator");

const router = express.Router();
attachResourceLoader(router, ["room"]);

router.get("/", roomsController.getList);
router.get("/:room", roomsController.getOne);
router.post("/", createRoomValidator, roomsController.create);
router.put("/:room", updateRoomValidator, roomsController.update);
router.patch("/:room", updateRoomValidator, roomsController.update);
router.delete("/:room", roomsController.remove);

module.exports = router;
