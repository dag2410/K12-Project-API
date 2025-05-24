const roomsService = require("@/services/rooms.service");
const { success } = require("../../../utils/response");

const getList = async (req, res) => {
  const rooms = await roomsService.getAll();
  success(res, 200, rooms);
};

const getOne = async (req, res) => {
  success(res, 200, req.room);
};

const create = async (req, res) => {
  const newRoom = await roomsService.create(req.body);
  success(res, 200, newRoom);
};

const update = async (req, res) => {
  const room = await roomsService.update(req.room.id, req.body);
  success(res, 200, room);
};

const remove = async (req, res) => {
  await roomsService.remove(req.room.id);
  success(res, 200);
};

module.exports = {
  getList,
  getOne,
  create,
  update,
  remove,
};
