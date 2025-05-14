const db = require("@/configs/db");

exports.findAll = async () => {
  const [comments] = await db.query("select * from comments");
  return comments;
};

exports.findById = async (id) => {
  const [comments] = await db.query("select * from comments where id = ?", [
    id,
  ]);
  return comments[0];
};

exports.create = async (data) => {
  const fields = Object.keys(data);
  const columns = fields.map((field) => `\`${field}\``).join(", ");
  const placeholders = fields.map(() => "?").join(", ");
  const values = fields.map((field) => data[field]);

  const query = `insert into comments (${columns}) values (${placeholders})`;
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

  const query = `update comments set ${setClause} where id = ?`;
  values.push(id);

  await db.query(query, values);
  return {
    id,
    ...data,
  };
};

exports.remove = async (id) => {
  const query = "delete from comments where id = ?";
  await db.query(query, [id]);
  return { id };
};
