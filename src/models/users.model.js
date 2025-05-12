const db = require("@/configs/db");

exports.getUsers = async () => {
  const [users] = await db.query("select * from users");
  console.log(users);
  return users;
};

exports.getUser = async () => {
  const [user] = await db.query(`select * from users where id=${id}`);
  return user;
};
