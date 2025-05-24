const roomsService = require("@/services/rooms.service");

exports.index = async (req, res) => {
  const rooms = await roomsService.getAll();
  res.render("admin/rooms/", {
    title: "Rooms List ",
    rooms,
  });
};

exports.show = async (req, res) => {
  const room = await roomsService.getById(req.params.id);
  res.render("admin/rooms/show", {
    room,
  });
};

exports.create = async (req, res) => {
  res.render("admin/rooms/create", {
    title: "Create Rooms",
  });
};

exports.store = async (req, res) => {
  const room = await roomsService.create(req.body);
  res.redirect(`admin/rooms/${room.id}`);
};

exports.edit = async (req, res) => {
  res.render("admin/rooms/edit", {
    title: "Edit Room",
  });
};

exports.update = async (req, res) => {
  const room = await roomsService.update(req.params.id, req.body);
  res.redirect(`admin/rooms/${room.id}`);
};
