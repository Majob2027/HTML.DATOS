class CuentaBancaria {
    constructor(saldo, Ncuenta) {
        this.Ncuenta = Ncuenta;
        this.saldo = saldo;
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad; 
            console.log(`Se depositaron ${cantidad} unidades. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log("La cantidad a depositar debe ser mayor que 0.");
        }
    }

    retirar(retiro) {
        if (retiro > 0 && retiro <= this.saldo) { 
            this.saldo -= retiro; 
            console.log(`Se retiraron ${retiro} unidades. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log("No tienes fondos suficientes para retirar esa cantidad de dinero");
        }
    }
}

let Ncuenta = prompt("Ingrese su número de cuenta: ");
let saldoInicial = 0; // Se inicializó el saldo en 0
const cuenta = new CuentaBancaria(saldoInicial, Ncuenta);

while (true) {
    console.log("¿Qué deseas hacer?");
    console.log("1 = Depositar dinero");
    console.log("2 = Retirar dinero");

    let decision = (prompt("Ingrese el número de la operación que desea realizar: "));

    if (decision === 1) {
        let cantidad = (prompt("Ingrese la cantidad de dinero que desea depositar: "));
        cuenta.depositar(cantidad);
    } else if (decision === 2) {
        let cantidad = (prompt("Ingrese la cantidad de dinero que desea retirar: "));
        cuenta.retirar(cantidad);
    } else {
        console.log("Operación no válida. Por favor, ingrese 1 para depositar dinero o 2 para retirar dinero.");
    }
}


