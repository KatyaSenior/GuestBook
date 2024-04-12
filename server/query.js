const Database = require("better-sqlite3");
const db = new Database("database.db");

const messages = db.prepare("SELECT * FROM messages").all();
console.log("messages", messages);
