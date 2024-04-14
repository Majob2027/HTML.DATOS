function rutas() {
    let mijson;
    const fs = require('fs');
    const readlineSync = require('readline-sync');

    const x = fs.readFileSync("Rutas.json", 'utf8');
    mijson = JSON.parse(x);

    const listarutas = {};
    console.log("Por favor defina la cantidad de nuevas rutas que desea agregar");
    const cantidad = parseInt(readlineSync.question(""));

    for (let i = 0; i < cantidad; i++) {
        const Nombre = readlineSync.question("Digite el nombre de la nueva ruta: ");

        const salones = "No definido";

        const nueva_ruta = {
            "Ruta": Nombre,
            "Salon": salones
        };

        mijson["Rutas"]["Rutas_nuevas"].push(nueva_ruta);
    }

    fs.writeFileSync("Rutas.json", JSON.stringify(mijson, null, 2));
}
