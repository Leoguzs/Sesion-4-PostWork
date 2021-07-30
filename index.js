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


  //Ej:2 función chunk que recibe un arreglo y un número entero size. La 
  //función debe dividir el arreglo en múltiples arreglos del tamaño determinado por size.
  
  //Arreglo para test en chunk
  var data = [1, 2, 3, 4, 5, 6, 7, 8]
  var anotherData = [4,4,7,4,24,57,3,5,1,6,7,3]
  var oneMoreData = [5,3,6,'Hola', 'Arreglo', 4]

  let chunk = (arreglo, tamaño)=> {
    for (i=0; i<arreglo.length; i += tamaño) {
      console.log(arreglo.slice(i, tamaño + i)); //utilicé la propiedad slice y push para que se dividiera
                                                //pero no lo comprendo del todo aún
    }
  };
  chunk(oneMoreData, 2)


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