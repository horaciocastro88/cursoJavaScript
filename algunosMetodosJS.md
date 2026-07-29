| Método JS | ¿Qué hace? | Equivalente en Python |
| --- | --- | --- |
| `array.forEach(fn)` | Recorre el arreglo y ejecuta algo (no devuelve nada). | `for x in lista:` |
| `array.map(fn)` | Transforma cada elemento y devuelve un nuevo arreglo. | List comprehension: `[fn(x) for x in lista]` |
| `array.filter(fn)` | Filtra elementos según una condición booleana. | List comprehension: `[x for x in lista if condicion]` |

| Método | Para qué sirve | Ejemplo |
| --- | --- | --- |
| `str.at(-1)` | Obtener caracteres desde el final. | `"hola".at(-1)` -> `"a"` |
| `str.slice(inicio, fin)` | Cortar una subcadena. | `"electro".slice(0, 3)` -> `"ele"` |
| `str.includes(sub)` | Buscar si existe una subcadena (devuelve boolean). | `"code".includes("o")` -> `true` |
| `str.replace(reg, sub)` | Reemplazar texto. | `"a-b-c".replaceAll("-", "")` -> `"abc"` |
| `str.repeat(n)` | Repetir un string N veces. | `"a".repeat(3)` -> `"aaa"` |