// No cambies los nombres de las funciones.

const { CONFIG_ERROR_INTERACTIVE_MODE } = require("simple-git/src/lib/tasks/clean");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    var mat =[];
    var keys =Object.keys(objeto);
    var values = Object.values(objeto);

  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < values.length; j++) {
      mat.push ([keys[i], values[j]]);
      i++;
    }
  }
  return mat;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};
  for (let i = 0;i < string.length; i++) {
    if(obj.hasOwnProperty(string[i])){
      obj[string[i]] += 1; // obj[string[i]] = obj[string[i]] +1
    } else { obj[string[i]] =1; }
  }
  return obj;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var conver = s.split(''); // convierto string a arreglo  [s, o, y, H, E, N, R, Y]
  var mayus = [];
  var minus =[];

  for (var i = 0; i<conver.length; i++) {
    if (conver[i] === conver[i].toUpperCase()){ //convierte mayusculas .toUpperCase
      mayus.push(conver[i]);
    } else {
      minus.push(conver[i]); // mayus.unshift(conver[i]) aqui lo pusheo a final
    } 
  }
  return mayus.join('')+ minus.join(''); // aqui convierto arreglo en string, osea junto todo
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var sa = str.split(' '); //separo el strin en cada espacio ' ', lo separo por espacio o por palabras
  var bn= []; // aqui guargo el nuevo string, por que mis palabras deben de estar en la misma posicion pero invertidas

  for (let i = 0; i < sa.length; i++) {
   bn.push(sa[i].split('').reverse().join(''));// primero le pusheo la palabra en la primera posición del nuevo array, 
   //después le aplico el split para que cada palabra de mi string lo tome como una posicion para cambiarlo, y luego
   // lo vuelvo a juntar para que sea string de nuevo  **reverse sirve para array no string por eso se aplica a sa[i].
   //ose the --> t h e --> e h t --> eht
  }
  return bn.join(' '); // convierte mi array en string
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var num = numero.toString();
  //convertimos NUMERO  en string 540 --> '540'  aqui esta en STRING
  //540 --> '540' --> ['5','4','0'] -->['0','4','5'] --> '045'

  var numinv = num.split('').reverse().join(''); 
  //aqui tenermos un array invertifo ose 045 pero aqui es ARRAY
  
  if (num === numinv){
    return "Es capicua";
  } else {
    return "No es capicua"; 
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var sabc='';

  for (var i = 0; i<cadena.length; i++) {
    if(cadena[i]==='a' || cadena[i]==='b' || cadena[i]==='c'){
      continue; // no hace nada continua
    } else{
      sabc += cadena[i]; // aqui estamos concatenando
    }
  }
  return sabc;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var cambio=true; //hace cambio en while para entrar
  while (cambio){
    cambio = false; //aqui me aseguro que no vuelvo a entrar
    for (let i = 0; i<arr.length-1; i++) { //recorro el arreglo hasta una posición antes porque voy a comparar
      // posición en la que estoy vs la siguiente 
      if(arr[i].length>arr[i+1].length){  // cada posición la comparo con la siguiente, si el actual es mayor con el
        // siguiente hago el cambio
        var aux = arr[i]; // primero guardo mi valor actual
        arr[i]=arr[i+1]; //asigno mi valor siguiente al actual
        arr[i+1]=aux; // asigno mi valor guardado en aux y lo paso a la posicion siguente
        cambio =true; // cambio true para al salir del for vuelva a entar al while y luego al for para verificar todo
        // y ver qe no existen mas cambios, entonces no entrar al if porque todo esta ordenado
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var arreglo3 =[];

  for (let i = 0; i<arreglo1.length; i++) {
    for (let j = 0; j<arreglo2.length; j++) {
     if(arreglo1[i] === arreglo2[j]){
       arreglo3.push(arreglo1[i]);
     }
    }
  }
  return arreglo3;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

