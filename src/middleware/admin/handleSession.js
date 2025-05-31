const { randomUUID } = require("node:crypto");
const sessionsModel = require("@/models/sessions.model");
async function handleSession(req, res, next) {
  let _sid = req.cookies.sid;
  let session = _sid && (await sessionsModel.findBySid(req.cookies.sid));
  if (!session) {
    _sid = randomUUID();
    const date = new Date();
    session = await sessionsModel.create({ sid: _sid });
    date.setDate(date.getDate() + 1);
    res.set("Set-Cookie", `sid=${_sid}; path=/; httpOnly; expires=${date}`);
  }

  const sessionData = JSON.parse(session.data ?? null) ?? {};

  res.session = {
    get(key) {
      return sessionData[key] ?? null;
    },
    set(key, data) {
      sessionData[key] = data;
      sessionsModel.update(_sid, {
        data: JSON.stringify(sessionData),
      });
    },
  };
  next();
}

module.exports = handleSession;
