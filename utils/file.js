const fs = require("fs").promises;
const DB_FILE = "./db.json";

async function readDb(resource, defaultValue = []) {
  try {
    const jsonDb = await fs.readFile(DB_FILE, "utf-8");
    return JSON.parse(jsonDb)[resource] ?? defaultValue;
  } catch (error) {
    console.log(error);
    return [];
  }
}
async function writeDb(resource, data) {
  let db = {};

  try {
    const jsonDb = await fs.readFile(DB_FILE, "utf-8");
    db = JSON.parse(jsonDb);
    // console.log(db);
  } catch (error) {}

  db[resource] = data;
  await fs.writeFile(DB_FILE, JSON.stringify(db, null, 2));
}

module.exports = {
  readDb,
  writeDb,
};
