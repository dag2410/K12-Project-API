const { randomUUID } = require("node:crypto");
const sessionModel = require("@/models/sessions.model");

async function session(req, res, next) {
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

  req.session = JSON.parse(session.data ?? null) ?? {};

  res.flash = (data) => {
    if (!req.session.flash) {
      req.session.flash = [];
    }
    req.session.flash.push(data);
  };

  res.on("finish", () => {
    sessionModel.update(_sid, {
      data: JSON.stringify(req.session),
    });
  });
  next();
}

module.exports = session;
