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
INSERT INTO messages (emoji, username, content) VALUES (?, ?, ?)
`);

insertMessage.run("👀", "Katya", "Test");
