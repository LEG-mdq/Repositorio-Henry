var listaDeCompras = [];
listaDeCompras[3]='Tomates';
listaDeCompras[1]='Lechuga';

console.log(listaDeCompras.length)
//listaDeCompras[1];
//var elementoDeArray = listaDeCompras[1];
//console.log(elementoDeArray);

var listaDeNombres=['Matias','Maria','Diego','Rosa'].length;
console.log(listaDeNombres);

//El método push() añade uno o más elementos al
// final de un arreglo, y devuelve la nueva
// longitud del array.

//  El metodo pop() elimina y devuelve el último
//elemento de un array

// El método unshift() agrega uno o mas elementos
//al inicio de un arreglo, y devuelve la longitud
//del array

//El método shit elimina y devuelve el primer 
//elemento de un array


var colores = ['amarillo','azul'];

//PUSH
colores.push('rojo');
//UNSHIFT
colores.unshift('verde');
//POP
colores.pop();
//SHIFT
colores.shift();

console.log(colores)

//Metodos varios

//El método includes() determina si un arreglo
//incluye o contiene un elemento específico. 
//Devuelve true o false en cada caso.

//INCLUDES
var pintores=['Picasso','Velazques','Van Gogh', 'Dali'];
var incluyeDali=pintores.includes('Monet');
console.log(incluyeDali);


//El método every() determina si todos los 
//elementos en un arreglo satisfacen una 
//misma condición.


//EVERY
var numeros =[10,6,8,9];
var cumpleCondicion= numeros.every((num)=>{
    return num >5;
});
    console.log(cumpleCondicion);

//El método every() determina si todos los
// elementos en un arreglo satisfacen una
// misma condición.

//El método join() convierte un arreglo en
//un string, uniendo todos los elementos 
//de este en una misma cadena.

//Metodos de recorrido

//El método forEach() nos permite recorrer
//un arreglo, realizando alguna acción en 
//para cada elemento.

//El método map() también nos permite 
//recorrer un arreglo y realizar una acción
// por cada elemento. La diferencia es que 
//este método devuelve un nuevo arreglo los
// elementos modificados.

// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);}

// WHILE
var arrglo = [];
while (arrglo.length < 5) {
   arrglo.push('Camilo');
}
console.log(arrglo);


