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

    h2.textContent = game.name;
    p.textContent = `Came out in ${game.year}`;
    img.src = game.imgURL;
    img.alt = game.name;

    formWrapper.appendChild(h2);
    formWrapper.appendChild(p);
    formWrapper.appendChild(img);
  });
}

getMessages();
