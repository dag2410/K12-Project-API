const roomsModel = require("@/models/rooms.model");
class roomsService {
  async getAll() {
    const rooms = await roomsModel.findAll();
    return rooms;
  }

  async getById(id) {
    const room = await roomsModel.findById(id);
    return room;
  }

  async create(data) {
    const room = await roomsModel.create(data);
    return room;
  }

  async update(id, data) {
    const room = await roomsModel.update(id, data);
    return room;
  }

  async remove(id) {
    const room = await roomsModel.remove(id);
    return room;
  }
}

module.exports = new roomsService();
