| Método JS | ¿Qué hace? | Equivalente en Python |
| --- | --- | --- |
| `array.forEach(fn)` | Recorre el arreglo y ejecuta algo (no devuelve nada). | `for x in lista:` |
| `array.map(fn)` | Transforma cada elemento y devuelve un nuevo arreglo. | List comprehension: `[fn(x) for x in lista]` |
| `array.filter(fn)` | Filtra elementos según una condición booleana. | List comprehension: `[x for x in lista if condicion]` |

---

| Método | Para qué sirve | Ejemplo |
| --- | --- | --- |
| `str.at(-1)` | Obtener caracteres desde el final. | `"hola".at(-1)` -> `"a"` |
| `str.slice(inicio, fin)` | Cortar una subcadena. | `"electro".slice(0, 3)` -> `"ele"` |
| `str.includes(sub)` | Buscar si existe una subcadena (devuelve boolean). | `"code".includes("o")` -> `true` |
| `str.replace(reg, sub)` | Reemplazar texto. | `"a-b-c".replaceAll("-", "")` -> `"abc"` |
| `str.repeat(n)` | Repetir un string N veces. | `"a".repeat(3)` -> `"aaa"` |

---

# 📝 JSDoc Cheat Sheet - Etiquetas Principales

A continuación se presentan las etiquetas de JSDoc más comunes para mejorar el autocompletado y el tipado en JavaScript.

| Etiqueta | Descripción | Ejemplo de Sintaxis |
| :--- | :--- | :--- |
| `@param {tipo} nombre` | Define el tipo y nombre de un parámetro de función. | `@param {string} nombreUsuario` |
| `@returns {tipo}` | Define el tipo de valor que retorna la función. | `@returns {boolean}` |
| `@type {tipo}` | Define el tipo de una variable individual o constante. | `/** @type {number[]} */ const notas = [];` |
| `@typedef` | Permite crear un tipo personalizado u objeto complejo. | *(Ver ejemplo detallado abajo)* |
| `@property {tipo} nombre` | Documenta la propiedad de un `@typedef` o de un objeto. | `@property {number} id` |
| `@deprecated` | Marca una función o variable como obsoleta. | `@deprecated Usar la nueva función de la API.` |
| `@throws {tipo}` | Documenta un error o excepción que la función puede lanzar. | `@throws {Error} Si el archivo no existe.` |
| `@async` | Indica explícitamente que la función es asíncrona. | `@async` |

---


