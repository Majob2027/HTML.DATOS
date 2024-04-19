class CuentaBancaria{
    constructor (Ncuenta, saldo){
        this.Ncuenta = Ncuenta;
        this.saldo = saldo;
    }

    Depositar(ingreso){
        if (ingreso > 0){
            console.log (this.saldo + ingreso);
        }
    }
    Retiro(retiro){
        if (retiro > 0 && retiro <= this.saldo){
            console.log (this.saldo - retiro);
        }
    }
}

let Numero = parseInt(prompt("Ingresa el numero de cuenta:"));
let SaldoInicial = parseInt(prompt("Ingrese el saldo Inicial de su cuenta:"));
let cuenta = new CuentaBancaria(Numero, SaldoInicial);
if (Numero > 0){
    while(true){
        console.log("1. Depositar dinero");
        console.log("2. Retirar dinero");
        console.log("3. Observar tu Numero de cuenta")
        console.log("4. Observar tu sueldo");
        console.log("5. salir")
        let opcion = parseInt(prompt("Escge que deseas hacer:"));

        if (opcion == 1){
            let ingreso = parseInt(prompt("Ingresa la cantidad que deseas depositas:"))
            cuenta.Depositar(ingreso);
        }else if (opcion == 2){
            let retiro = parseInt(prompt("Ingresa la cantidad que seas retirar"))
            cuenta.Retiro(retiro);
        }else if (opcion == 3){
            console.log (cuenta.Ncuenta)
        }else if (opcion == 4){
            console.log (cuenta.saldo)
        }else if (opcion == 5){
            break;
        }else{
            console.log("Opcion invalida")
        }

    }
}else{
    console.log("El numero no es un numero positivo")
}