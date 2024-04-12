const formWrapper = document.getElementById("formWrapper");
const messageShowSpan = document.getElementById("messageShowSpan");

let messageCount = 1;

async function getMessages() {
  const response = await fetch("http://localhost:8080/messages");
  messageShowSpan.textContent = `${messageCount} messages`;
  const messages = await response.json();
  console.log(messages);

  messages.forEach(function (message) {
    const li = document.createElement("li");

    li.textContent = `${message.emoji} ${message.username} said: ${message.content}`;

    messageList.appendChild(li);
  });
}

getMessages();

async function handleSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const content = event.target.content.value;
  const emoji = event.target.reaction.value;

  await fetch("http://localhost:8080/messages", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      content: content,
      emoji: emoji,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

addEventListener("submit", handleSubmit, getMessages);
