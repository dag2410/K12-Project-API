const userModel = require("@/models/users.model");
async function shareLocals(req, res, next) {
  const userId = req.session.userId;
  res.locals.auth = null;

  if (userId) {
    res.locals.auth = await userModel.findById(userId);
  }
  res.locals.flash = req.session.flash || [];
  res.locals.getFlashMessages = (type) => {
    if (type) {
      return res.locals.flash.filter((msg) => msg.type === type);
    }
    return res.locals.flash;
  };
  delete req.session.flash;

  next();
}

module.exports = shareLocals;
