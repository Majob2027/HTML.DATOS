


function Maincamperañadir (){

    let mijson = JSON.parse(readFileSync('inscritos,json', 'utf8'));
    let inscripciones = mijson.datos.inscripciones;

    function maincamper(){

        const estado = "Inscrito";
        const nuevo_id = Math.max(...inscripciones.map(inscripcion => inscripcion.id), 0) + 1;

        const nueva_inscripcion = {
            id:nuevo_id,
            Identificacion :parseInt(readlineSync.question("Escriba el numero de identificacion")),
            Nombre:readlineSync.question("Escriba su nombre"),
            Apellido1:readlineSync.question("Escriba su primer apellido"),
            Apellido2:readlineSync.question("Escriba su segundo apellido"),
            Direccion:readlineSync.question("Escriba su direccion"),
            Acudiente : readlineSync.question("Escriba el nomnre de su acudiente"),
            Celular: parseInt(readlineSync.question("Escriba su numero de celular")),
            Telefono : parseInt(readlineSync.question("Escriba su numero de telefono")),
            Estado : estado


        }




    }

    inscripciones.push(nueva_inscripcion);

    writeFileSync('inscritos.json', JSON.stringify(mijson, null, 2), 'utf8');
   
    


}

Maincamperañadir();

//Ooooooooooooooooooooooooooooooooooooooooo