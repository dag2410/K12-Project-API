const { randomUUID } = require("node:crypto");
const sessionModel = require("@/models/sessions.model");

async function handleSession(req, res, next) {
  let _sid = req.cookies.sid;
  let session = _sid && (await sessionModel.findBySid(req.cookies.sid));
  if (!session) {
    _sid = randomUUID();
    const date = new Date();
    date.setDate(date.getDate() + 7);

    session = await sessionModel.create({
      sid: _sid,
      expires_at: date,
    });
    const isProduction = process.env.NODE_ENV === "production";
    res.set(
      "Set-Cookie",
      `sid=${_sid}; path=/; httpOnly;${
        isProduction ? " Secure" : ""
      } expires=${date.toUTCString()} `
    );
  }
  const sessionData = JSON.parse(session.data ?? null) ?? {};

  req.session = {
    get(key) {
      return sessionData[key] ?? null;
    },
    set(key, data) {
      sessionData[key] = data;
      sessionModel.update(_sid, {
        data: JSON.stringify(sessionData),
      });
    },
  };
  next();
}

module.exports = handleSession;
