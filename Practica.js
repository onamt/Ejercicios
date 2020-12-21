//Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

//ejercicio 1
const mifucnion = ("Hola Mundo");
console.log(mifucnion.length);

/*ejercicio2 Programa una función que te devuelva el texto recortado según el
 número de caracteres indicados, 
 pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

const recortado = ("Dinosaurio")
console.log(recortado.substr(0, 4));

/*ejercicio3 Programa una función que dada una 
String te devuelva un Array de textos 
separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') 
devolverá ['hola', 'que', 'tal'].*/

const arreglo = "Hola, como, estan?".split(",");
console.log(arreglo);

//ejercicio4
/*Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo. */


const textRepetir = (text = "", repetir = undefined) => {
    if (!text) return console.warn("No ingresaste una cadena de texto");
    if (repetir === undefined) return console.warn("no expecificaste la cantidad de repeticiones");
    if (repetir === 0) return console.warn("el numero de repeticiones no puede ser cero");
    if (Math.sign(repetir) === -1) return console.error("El numero de repeticiones no puede ser negativo");
    
    
  
    for (let i = 1; i <= repetir; i++) {
      console.log(`${text}, ${i} `)
    }
  }
  textRepetir("Hola mundo", 3)