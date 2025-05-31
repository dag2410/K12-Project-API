const userModel = require("@/models/users.model");
async function shareLocals(req, res, next) {
  const userId = req.session?.get("userId");
  res.locals.auth = null;

  if (userId) {
    const user = await userModel.findById(userId);
    if (user) {
      res.locals.auth = user;
    }
  }
  next();
}

module.exports = shareLocals;
