import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        emoji TEXT NOT NULL UNIQUE,
        username TEXT NOT NULL UNIQUE,
        content TEXT NOT NULL UNIQUE
    )
`);

const insertMessage = db.prepare(`
INSERT INTO messages (emoji, username, content) VALUES (emoji, username, content) 
`);

insertMessage.run("👀", "Katya", "Test");
insertMessage.run("😡", "Ugh", "Broken code ):");
insertMessage.run(
  "😀",
  "pls help",
  "Tim, Manny, Cordelia, everyone.... Where are youuuuuuuuuu?"
);
