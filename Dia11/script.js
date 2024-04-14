// ** FUNCION SIN RETORNO Y SIN PARAMETROS **
function funcionNormal(){
    console.log("Mi función");
}

funcionNormal()

// ** FUNCION SIN RETORNO Y CON PARAMETROS **
function suma(a,b){
    console.log(a+b);
}

suma(10,10)
// ** FUNCION CON RETORNO Y CON PARAMETROS **
function sumaR(a,b){
    //console.log(a+b);
    return a+b;
}

console.log((5,5))
// ** FUNCION CON RETORNO Y SIN PARAMETROS **
function salonFavorito(){
    //console.log(a+b);
    return "P1";
}

console.log(salonFavorito())

//************************ BUCLE FOR ****************************/

for (let i=0;i>5;i=i+1){
    console.log(i);
}



//************************ BUCLE FOR ****************************/
arreglo=[123,"pedro",true]

tamano=arreglo.lenght;

for (let i=0;i<tamano;i++){
    console.log(arreglo[i]);
}

//******* Ejercicio1 *******/

celsius = prompt ( "Escriba la cantidad de grados celsius a convertir")

Farenheit= 32+(9*celsius/5);
console.log(Farenheit)

//********************* */