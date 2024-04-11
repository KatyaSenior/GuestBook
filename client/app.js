const formWrapper = document.getElementById("formWrapper");

async function getMessages() {
  const response = await fetch(
    "https://express-sql-games-demo.onrender.com/games"
  );

  const messages = await response.json();
  console.log(messages);

  messages.forEach(function (message) {
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const img = document.createElement("img");

    h2.textContent = message.name;
    p.textContent = `Came out in ${message.year}`;
    img.src = message.imgURL;
    img.alt = message.name;

    formWrapper.appendChild(h2);
    formWrapper.appendChild(p);
    formWrapper.appendChild(img);
  });
}

getMessages();
