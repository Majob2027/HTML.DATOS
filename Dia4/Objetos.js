// Carro //


var Car = new Object();
Car.make = "Mazda";
Car.model = "3";
Car.year = 2019;


var myCar = {
    make: "Mazda",
    model: "3",
    year: 2019,
  };
  

// persona //

var persona = new Object();
persona.name = "Maria";
persona.age = "17";
persona.city = "Bucaramanga";
persona.birthday = "20/4";
persona.number = 3187014320;


var persona = {
    name: "Maria ",
    age: "17",
    city: "Bucaramana",
    Birthday: "20/14",
    Number: 3187014320,
  };



  // Libro //

var Libro = new Object();
Libro.Name = "100 años de soledad";
Libro.Autor = "Gabriel Garcia marquez";
Libro.Año = "1967";
Libro.Ciudad = "Buenos aires ";
Libro.Estilo = "Realismo magico ";


var Libro = {
    Name : "100 años de soledad",
    Autor : "Gabriel Garcia marquez",
    Año : "1967",
    Ciudad: "Buenos aires ",
    Estilo : "Realismo magico ",
  };



  // Numero //

var Numero = new Object();
Numero.Valor = "100";
Numero.tipo = "entero";
Numero.negativo = "No";
Numero.Positivo = "Si";



var Numero = {
    Valor : "100",
    Tipo : "entero",
    negativo :"No",
    Positivo : "Si",
  };



  // Funcion //

  function Usuario(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

const usuarioAna = new Usuario('Maria', 17);
console.log (usuarioAna)
