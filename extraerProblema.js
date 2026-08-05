// Busca el contenedor del problema (individual o dentro de una lista)

const el = document.querySelector('.problem-statement') || document.querySelector('.problemindexpos');

if (!el) {
    console.error("No se encontró el enunciado. Asegurate de estar en la pestaña correcta del problema.");
} else {
    const clone = el.cloneNode(true);
    // Limpia la previsualización y el renderizado pesado de MathJax
    clone.querySelectorAll('.MathJax_Preview, .MathJax, .MathJax_Display').forEach(node => node.remove());
    
    // Muestra el texto limpio en la consola
    console.log(clone.innerText);
}