const db = require("@/configs/db");

// Lấy tất cả bài viết
exports.findAll = async () => {
  const [posts] = await db.query(`SELECT * FROM posts`);
  return posts;
};

exports.findById = async (id) => {
  const [posts] = await db.query(
    `SELECT * FROM posts WHERE id = ? OR slug = ?`,
    [id, id]
  );
  return posts[0];
};

// Tạo bài viết mới
exports.create = async (data) => {
  const fields = Object.keys(data);
  const columns = fields.map((field) => `\`${field}\``).join(", ");
  const placeholders = fields.map(() => "?").join(", ");
  const values = fields.map((field) => data[field]);

  const query = `INSERT INTO posts (${columns}) VALUES (${placeholders})`;
  const [{ insertId }] = await db.query(query, values);
  return {
    id: insertId,
    ...data,
  };
};

// Cập nhật bài viết
exports.update = async (id, data) => {
  const fields = Object.keys(data);
  const setClause = fields.map((field) => `\`${field}\` = ?`).join(", ");
  const values = fields.map((field) => data[field]);

  const query = `UPDATE posts SET ${setClause} WHERE id = ?`;
  values.push(id);

  await db.query(query, values);
  return {
    id,
    ...data,
  };
};

// Xoá bài viết
exports.remove = async (id) => {
  const query = `DELETE FROM posts WHERE id = ?`;
  await db.query(query, [id]);
  return { id };
};

exports.count = async () => {
  const [{ rows }] = await db.query("select count(*) as total from posts");
  return rows;
};
