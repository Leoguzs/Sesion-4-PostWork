/*EJ:1 Función llamada deepEqual que reciba dos argumentos y retorne true si son el mismo valor o si 
son objetos con las mismas propiedades, en este último caso los valores de las propiedades deben 
ser comparados con una llamada recursiva de deepEqual.*/
function deepEqual(a, b) {
  //Identificar si los argumentos son de tipo object
  if (typeof(a) === 'object' && typeof(b)=== 'object'){
    //Asignarle a las variables las llaves de los parametros
     let aKey = Object.keys(a);
     let bKey = Object.keys(b);
     
     //Revisar si tienen la misma cantidad de claves
     if(aKey.length !== bKey.length){
        return false
     }

     //Ciclo que recorre las claves si son iguales
     for(let i = 0; i<aKey.length; i++){
       if(!deepEqual(aKey[i], bKey[i])){
         return false
       }
      } return true;
  }else if(a===b)
      return true
  else
    return false;
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


/*Ej:2 función chunk que recibe un arreglo y un número entero size. La 
función debe dividir el arreglo en múltiples arreglos del tamaño determinado por size.*/
function chunk(array, size) {
    const newArr = [];

    for(let i = 0; i < array.length / size; ++i)
        newArr.push(array.slice(i*size, i*size + size));

     return newArr;
};
//Arreglo para test en chunk
const data = [1, 2, 3, 4, 5, 6, 7, 8];
//var data = [4,4,7,4,24,57,3,5,1,6,7,3];
//var data = [5,3,6,'Hola', 'Arreglo', 4];  

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
//////////////////////////////////////////////////////////////////////////////////////////////
//Solucion 2 para Ej:2
function chunk(array, size) {
    // Code goes here
    const newArr = [];
    
    for(let i = 0; i < Math.ceil((array.length / size)); ++i){
        newArr[i] = [];
        for(let j = 0; j < size; ++j)
            if(typeof array[size * i + j] !== 'undefined')
                newArr[i][j] = array[size * i + j];
    }

    return newArr;
};
  
const data = [1, 2, 3, 4, 5, 6, 7, 8];
//const data = [4,4,7,4,24,57,3,5,1,6,7,3];
//const data = [5,3,6,'Hola', 'Arreglo', 4];  
  
console.log('Test 1:', chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]

//   let chunk = (arreglo, tamaño)=> {
//     for (i=0; i<arreglo.length; i += tamaño) {
//       console.log(arreglo.slice(i, tamaño + i)); //utilicé la propiedad slice y push para que se dividiera
//                                                 //pero no lo comprendo del todo aún
//     }
//   };
//   chunk(oneMoreData, 2)


/*Ej:3 Escribir una función frequency que recibe un string como argumento.*/
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
