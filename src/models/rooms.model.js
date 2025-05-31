const db = require("@/configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("@/utils/queryBuilder");

exports.findAll = async () => {
  const [rooms] = await db.query("select * from rooms order by id desc");
  return rooms;
};

exports.findById = async (id) => {
  const [rooms] = await db.query(`select * from rooms where id = ?`, [id]);
  return rooms[0];
};

exports.create = async (data) => {
  const { columns, placeholders, values } = buildInsertQuery(data);
  const query = `INSERT INTO rooms (${columns}) VALUES (${placeholders})`;
  const [{ insertId }] = await db.query(query, values);

  return {
    id: insertId,
    ...data,
  };
};

exports.update = async (id, data) => {
  const { setClause, values } = buildUpdateQuery(data);
  values.push(id);
  const query = `UPDATE rooms SET ${setClause} WHERE id = ?`;
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
