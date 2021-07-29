//EJ:1 Función llamada deepEqual que reciba dos argumentos y retorne true si son el mismo valor o si 
//son objetos con las mismas propiedades, en este último caso los valores de las propiedades deben 
//ser comparados con una llamada recursiva de deepEqual.
function deepEqual(a, b) {
//cógico
}
    

//Objetos a comparar en deepEqual
  var john = {
    firstName: 'John',
    lastName: 'Doe'
  }
  
  var jane = {
    firstName: 'Jane',
    lastName: 'Doe'
  }

  var luca = {
      firstName: 'Luca'
  }


  //Ej:3 Escribir una función frequency que recibe un string como argumento. 
  function frequency(string) {
 if (typeof string != 'string') {
    throw TypeError ('El argumento debe de ser una cadena de caracteres')
    } 
let contador= {}; //literal de diccionario de mapa vacío
string.replace(/\S/g, function(w) { //word 
    contador[w] = (isNaN(contador[w]) ? 1 : contador [w] + 1);
});
return contador;

  }

  try {
      console.log(frequency('Leonidas'));
  } catch (e) {
    console.log(`Error ${e.message}`)
      
  } 