const db = require("@/configs/db");
const commentsModel = require("@/models/comments.model");

exports.findAll = async () => {
  const [posts] = await db.query(`select * from posts order by id desc`);
  return posts;
};

exports.findById = async (id) => {
  const [posts] = await db.query(
    `select * from posts WHERE id = ? OR slug = ?`,
    [id, id]
  );
  return posts[0];
};

exports.create = async (data) => {
  const fields = Object.keys(data);
  const columns = fields.map((field) => `\`${field}\``).join(", ");
  const placeholders = fields.map(() => "?").join(", ");
  const values = fields.map((field) => data[field]);

  const query = `insert into posts (${columns}) values (${placeholders})`;
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

  const query = `update posts set ${setClause} where id = ?`;
  values.push(id);

  await db.query(query, values);
  return {
    id,
    ...data,
  };
};

exports.remove = async (id) => {
  const query = `delete from posts WHERE id = ?`;
  await db.query(query, [id]);
  return { id };
};

exports.count = async () => {
  const [{ rows }] = await db.query("select count(*) as total from posts");
  return rows;
};

exports.findComments = async (postId) => {
  const [comments] = await db.query(
    `SELECT * from comments where post_id = ?`,
    [postId]
  );
  return comments;
};

exports.createPostComment = async (postId, data) => {
  return await commentsModel.create({
    post_id: postId,
    ...data,
  });
};
