import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

import Database from "better-sqlite3";
const db = new Database("database.db");

app.get("/", function (request, response) {
  response.json(
    "You are looking at my root route. Home roude. I don't think I undestan- WAIT I GOT THE JOKE."
  );
});

app.get("/messages", function (request, response) {
  const messages = db.prepare("SELECT * FROM messages").all();
  response.json(messages);
});

app.post("/messages", function (request, response) {
  const newMessage = request.body;
  console.log(newMessage);
  response.json(newMessage);
  const insertMessage = db.prepare(
    `INSERT INTO messages (emoji, username, content) VALUES (?, ?, ?)`
  );
  insertMessage.run("?", "?", "?");
  //send body to database. Look at line 19. That is grabbing the messages. Seed line 14. ? variable related to body.
});

app.listen(8080, function () {
  console.log("AAAAAAAAAAAAAAH mood. 8080");
});
