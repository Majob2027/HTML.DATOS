class A {
    constructor(valor) {
        this.valor = valor;
    }
}

class B extends A {
    constructor(valorB, valorA) {
        super(valorA);
        this.valorB = valorB;
    }
}

class C extends B {
    constructor(valorC, valorB, valorA) {
        super(valorB, valorA);
        this.valorC = valorC;
    }
}

// Crear una instancia de la clase C
const objetoC = new C("Valor C", "Valor B", "Valor A");
console.log(objetoC);
