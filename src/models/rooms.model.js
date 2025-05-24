const db = require("@/configs/db");

exports.findAll = async () => {
  const [rooms] = await db.query("select * from rooms");
  return rooms;
};

exports.findById = async (id) => {
  const [rooms] = await db.query(`select * from rooms where id = ?`, [id]);
  return rooms[0];
};

exports.create = async (data) => {
  const fields = Object.keys(data);
  const columns = fields.map((field) => `\`${field}\``).join(", ");
  const placeholders = fields.map(() => "?").join(", ");
  const values = fields.map((field) => data[field]);

  const query = `insert into rooms (${columns}) values (${placeholders})`;
  const [{ insertId }] = await db.query(query, values);
  return {
    id: insertId,
    ...data,
  };
};

exports.update = async (id, data) => {
  const fields = Object.keys(data);
  const setClause = fields.map((field) => `\`${field}\` = ?`).join(", ");
  const values = fields.map((field) => data[field]);

  const query = `UPDATE rooms SET ${setClause} WHERE id = ?`;
  values.push(id);

  await db.query(query, values);
  return {
    id,
    ...data,
  };
};

exports.remove = async (id) => {
  const query = `DELETE FROM rooms WHERE id = ?`;
  await db.query(query, [id]);
  return { id };
};
