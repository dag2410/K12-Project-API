const db = require("@/configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("@/utils/queryBuilder");
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
  const { columns, placeholders, values } = buildInsertQuery(data);
  const query = `INSERT INTO categories (${columns}) VALUES (${placeholders})`;
  const [{ insertId }] = await db.query(query, values);

  return {
    id: insertId,
    ...data,
  };
};

exports.update = async (id, data) => {
  const { setClause, values } = buildUpdateQuery(data);
  values.push(id);
  const query = `UPDATE categories SET ${setClause} WHERE id = ?`;
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
