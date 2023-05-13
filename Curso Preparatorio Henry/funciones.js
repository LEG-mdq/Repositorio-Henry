function samaTres(x) {
    console.log(x+3)
}
/*
//Primero 
function sumaTres(x) {
    return x+3;
}

//Segundo
var sumaTres = function (x) {
    return x+3;             
}       

//Tercero

 var sumaTres = (x) => {
    return x + 3;
 };
*/

//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
  };
  
  //Precedencia de valores
var a = 1;
var b = 2;
var c = a = b;
console.log (c);