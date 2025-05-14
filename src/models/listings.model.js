const db = require("@/configs/db");

exports.findAll = async () => {
  const [listings] = await db.query("select * from listings");
  return listings;
};

exports.findById = async (id) => {
  const [listings] = await db.query(`select * from listings where id = ?`, [
    id,
  ]);
  return listings[0];
};

exports.create = async (data) => {
  const fields = Object.keys(data);
  const columns = fields.map((field) => `\`${field}\``).join(", ");
  const placeholders = fields.map(() => "?".join(", "));
  const values = fields.map((field) => data[field]);

  const query = `insert into listings (${columns}) values (${placeholders})`;
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

  const query = `UPDATE listings SET ${setClause} WHERE id = ?`;
  values.push(id);

  await db.query(query, values);
  return {
    id,
    ...data,
  };
};

exports.remove = async (id) => {
  const query = `DELETE FROM listings WHERE id = ?`;
  await db.query(query, [id]);
  return { id };
};
