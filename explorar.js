const { JSDOM } = require("jsdom");

async function probarDOM() {
  // 1. Descargamos el HTML de cualquier página web
  const url = "https://anjana.dev/javascript-first-steps/1-tictactoe.html";
  const respuesta = await fetch(url);
  const htmlText = await respuesta.text();

  // 2. Le pasamos el HTML a JSDOM para que cree un "document" virtual
  const dom = new JSDOM(htmlText);
  const document = dom.window.document;

  // 3. ¡Listo! Ya puedes usar cualquier método del DOM
  const titulo = document.querySelector("h1").textContent;
  console.log("El título es:", titulo);

  // También puedes buscar por ID si existiera:
  // const miElemento = document.getElementById("unid").textContent;
}

probarDOM();