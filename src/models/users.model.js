const db = require("@/configs/db");

exports.findAll = async () => {
  const [users] = await db.query("select * from users");
  return users;
};

exports.findById = async (id) => {
  const [users] = await db.query(
    `select * from users where id = ? or username = ?`,
    [id, id]
  );
  return users[0];
};

exports.create = async (data) => {
  const fields = Object.keys(data);
  const columns = fields.map((field) => `\`${field}\``).join(", ");
  const placeholders = fields.map(() => "?").join(", ");
  const values = fields.map((field) => data[field]);

  const query = `insert into users (${columns}) values (${placeholders})`;
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

  const query = `UPDATE users SET ${setClause} WHERE id = ?`;
  values.push(id);

  await db.query(query, values);
  return {
    id,
    ...data,
  };
};

exports.remove = async (id) => {
  const query = `DELETE FROM users WHERE id = ?`;
  await db.query(query, [id]);
  return { id };
};
