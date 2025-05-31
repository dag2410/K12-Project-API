const db = require("@/configs/db");
const { buildInsertQuery, buildUpdateQuery } = require("@/utils/queryBuilder");

exports.findAll = async () => {
  const [comments] = await db.query("select * from comments order by id desc");
  return comments;
};

exports.findById = async (id) => {
  const [comments] = await db.query("select * from comments where id = ?", [
    id,
  ]);
  return comments[0];
};

exports.create = async (data) => {
  const { columns, placeholders, values } = buildInsertQuery(data);
  const query = `INSERT INTO comments (${columns}) VALUES (${placeholders})`;
  const [{ insertId }] = await db.query(query, values);

  return {
    id: insertId,
    ...data,
  };
};

exports.update = async (id, data) => {
  const { setClause, values } = buildUpdateQuery(data);
  values.push(id);
  const query = `UPDATE comments SET ${setClause} WHERE id = ?`;
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
