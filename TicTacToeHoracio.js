// Repasamos algunos metodos y propiedades del DOM

console.log("Esto es una prueba de conexion del JS!");

const titulo = document.querySelector("title")?.textContent;
const elH1 = document.querySelector("h1");

console.log(titulo);

if (elH1) {
  elH1.style.color = "red";
}

const elH2 = /** @type {HTMLHeadingElement} */ (document.querySelector("h2"));

elH2.style.fontStyle = "oblique";
elH2.style.color = "royalblue";

//Seleccionar: document.getElementById('id') o document.querySelector('.clase')

//Cambiar texto/HTML: elemento.textContent = 'Nuevo texto' o elemento.innerHTML = '<span>Nuevo</span>'

//Modificar clases CSS: elemento.classList.add('activo') o elemento.classList.remove('oculto')

// que es el objeto Local Storage ?
