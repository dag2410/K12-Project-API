const db = require("@/configs/db");

exports.findAll = async () => {
  const [categories] = await db.query(
    "select * from categories order by id desc"
  );
  return categories;
};

exports.findById = async (id) => {
  const [categories] = await db.query("select * from categories where id = ?", [
    id,
  ]);
  return categories[0];
};

exports.create = async (data) => {
  const fields = Object.keys(data);
  const columns = fields.map((field) => `\`${field}\``).join(", ");
  const placeholders = fields.map(() => "?").join(", ");
  const values = fields.map((field) => data[field]);

  const query = `insert into categories (${columns}) values (${placeholders})`;
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

  const query = `UPDATE categories SET ${setClause} WHERE id = ?`;
  values.push(id);

  await db.query(query, values);
  return {
    id,
    ...data,
  };
};

exports.remove = async (id) => {
  const query = `DELETE FROM categories WHERE id = ?`;
  await db.query(query, [id]);
  return { id };
};
