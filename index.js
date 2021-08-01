/*EJ:1 Función llamada deepEqual que reciba dos argumentos y retorne true si son el mismo valor o si 
son objetos con las mismas propiedades, en este último caso los valores de las propiedades deben 
ser comparados con una llamada recursiva de deepEqual.*/
function deepEqual(a, b) {
  //Identificar si los argumentos son de tipo object
  if (typeof (a) === 'object' && typeof (b) === 'object') {
    //Asignarle a las variables las llaves de los parametros
    let aKey = Object.keys(a);
    let bKey = Object.keys(b);

    //Revisar si tienen la misma cantidad de claves
    if (aKey.length !== bKey.length) {
      return false
    }

    //Ciclo que recorre las claves si son iguales
    for (let i = 0; i < aKey.length; i++) {
      if (!deepEqual(aKey[i], bKey[i])) {
        return false
      }
    } return true;
  } else if (a === b)
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

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false


/*Ej:2 función chunk que recibe un arreglo y un número entero size. La 
función debe dividir el arreglo en múltiples arreglos del tamaño determinado por size.*/
function chunk(array, size) {
  const newArr = [];

  for (let i = 0; i < array.length / size; ++i)
    newArr.push(array.slice(i * size, i * size + size));

  return newArr;
};
//Arreglo para test en chunk
const data = [1, 2, 3, 4, 5, 6, 7, 8];
//var data = [4,4,7,4,24,57,3,5,1,6,7,3];
//var data = [5,3,6,'Hola', 'Arreglo', 4];  

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]

//   let chunk = (arreglo, tamaño)=> {
//     for (i=0; i<arreglo.length; i += tamaño) {
//       console.log(arreglo.slice(i, tamaño + i)); //utilicé la propiedad slice y push para que se dividiera
//                                                 //pero no lo comprendo del todo aún
//     }
//   };
//   chunk(oneMoreData, 2)


/* EJERCICIO 3

Escribir una función frequency que recibe un string como argumento. 
Esta función debe contar la frecuencia o el número de veces que se repite cada carácter. 
El resultado debe mostrarse en un objeto donde las propiedades sean los caracteres, y los valores sean la frecuencia. 
Los resultados deben ordenarse ascendentemente por los caracteres y no la frecuencia.
*/

function frequency(string) {
  const charArray = string.split("").sort();
  let freqObject = {};
  for (char of charArray) {
    if (freqObject[char]) {
      freqObject[char]++;
    } else {
      freqObject[char] = 1;
    }
  }
  return freqObject;
};

console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
   // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
