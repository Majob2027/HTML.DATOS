class Vehiculo {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  
    mostrarDetalles() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
  }
  
  class Coche extends Vehiculo {
    constructor(marca, modelo, año, puertas) {
      super(marca, modelo, año);
      this.puertas = puertas;
    }
  
    mostrarDetalles() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Puertas: ${this.puertas}`);
    }
  }
  
  const vehiculo1 = new Vehiculo("Audi", "Q8 Sportback E-tron 55 Prestige", 2023);
  vehiculo1.mostrarDetalles(); 
  
  const coche1 = new Coche("Audi", "Q8 Sportback E-tron 55 Prestige", 2023, 4);
  coche1.mostrarDetalles(); 