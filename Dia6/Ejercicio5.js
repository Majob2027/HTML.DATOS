class CuentaBancaria {
    constructor(saldo, Ncuenta) {
        this.Ncuenta = Ncuenta;
        this.saldo = saldo;
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log("Depósito realizado. Nuevo saldo: " + this.saldo);
        } else {
            console.log("La cantidad a depositar debe ser mayor que 0.");
        }
    }

    retirar(retiro) {
        if (retiro > 0 && retiro <= this.saldo) { 
            this.saldo -= retiro;
            console.log("Retiro realizado. Nuevo saldo: " + this.saldo);
        } else {
            console.log("No tienes fondos suficientes para retirar esa cantidad de dinero.");
        }
    }
}

let Ncuenta = prompt("Ingrese su número de cuenta: ");
let saldoInicial = parseFloat(prompt("Ingrese saldo inicial: "));
let cuenta = new CuentaBancaria(saldoInicial, Ncuenta);

while (true) {
    console.log("¿Qué deseas hacer?");
    console.log("1 = Depositar dinero");
    console.log("2 = Retirar dinero");
    console.log("3 = Salir");

    let decision = parseInt(prompt("Ingrese el número de la operación que desea realizar: "));

    if (decision === 1) {
        let cantidad = parseFloat(prompt("Ingrese la cantidad de dinero que desea depositar: "));
        cuenta.depositar(cantidad);
    } else if (decision === 2) {
        let retiro = parseFloat(prompt("Ingrese la cantidad de dinero que desea retirar: "));
        cuenta.retirar(retiro);
    } else if (decision === 3) {
        break;
    } else {
        console.log("Operación no válida. Por favor, ingrese 1 para depositar dinero, 2 para retirar dinero o 3 para salir.");
    }
}
