function mainTrainersAñadir() {
    let mijson;
    try {
        mijson = JSON.parse(localStorage.getItem('datos'));
    } catch (error) {
        mijson = {"Datos": {"Trainers_Secundarios": []}};
    }
    
    if (!mijson['Datos']['Trainers_Secundarios']) {
        mijson['Datos']['Trainers_Secundarios'] = [];
    }
    
    const nuevo_id = Math.max(...mijson['Datos']['Trainers_Secundarios'].map(inscripcion => inscripcion["id"]), 0) + 1;
    const nueva_inscripcion = {
        id: nuevo_id === 1 ? 1 : nuevo_id,
        Identificacion: parseInt(prompt("Escriba el número de identificación: ")),
        Nombre: prompt("Escriba el nombre: "),
        Apellido1: prompt("Escriba el apellido 1: "),
        Celular: parseInt(prompt("Escriba el número de celular: ")),
        Telefono: parseInt(prompt("Escriba el número de teléfono: ")),
        Horario: {
            Clase1: "Sin asignar",
            Clase2: "Sin asignar",
            Clase3: "Sin asignar",
            Clase4: "Sin asignar"
        }
    };
    
    mijson['Datos']['Trainers_Secundarios'].push(nueva_inscripcion);
    
    localStorage.setItem('datos', JSON.stringify(mijson));
}

function mainTrainersEliminar() {
    let mijson;
    const tipo_entrenador = prompt("¿Desea eliminar un entrenador principal o secundario? (P/S): ").toUpperCase();
    
    if (!['P', 'S'].includes(tipo_entrenador)) {
        console.log("Opción no válida. Debe ingresar 'P' para principal o 'S' para secundario.");
        return;
    }
    
    const identificacion_a_eliminar = parseInt(prompt("Ingrese el número de identificación del entrenador a eliminar: "));
    
    try {
        mijson = JSON.parse(localStorage.getItem('datos'));
    } catch (error) {
        console.error(error);
        return;
    }
    
    let eliminado = false;
    
    if (tipo_entrenador === 'P') {
        const entrenadores = mijson['Datos']['Trainer_Principales'];
        for (const entrenador of entrenadores) {
            if (entrenador['id'] === identificacion_a_eliminar) {
                entrenador['Identificacion'] = '';
                entrenador['Nombre'] = '';
                entrenador['Apellido1'] = '';
                entrenador['Celular'] = '';
                entrenador['Telefono'] = '';
                console.log("Entrenador principal eliminado exitosamente.");
                eliminado = true;
                break;
            }
        }
    } else {
        const entrenadores = mijson['Datos']['Trainers_Secundarios'];
        
        for (let i = 0; i < entrenadores.length; i++) {
            if (entrenadores[i]['Identificacion'] === identificacion_a_eliminar) {
                mijson['Datos']['Trainers_Secundarios'].splice(i, 1);
                console.log("Entrenador secundario eliminado exitosamente.");
                eliminado = true;
                break;
            }
        }
    }
    
    if (!eliminado) {
        console.log("No se encontró ningún entrenador con la identificación proporcionada.");
    }
    
    localStorage.setItem('datos', JSON.stringify(mijson));
}

function mainAsignarTrainers() {
    let mijson, mijson2;

    function reindexarIDsEntrenadoresSecundarios(TrainersS) {
        for (let i = 0; i < TrainersS.length; i++) {
            TrainersS[i]['id'] = i + 1;
        }
    }

    try {
        mijson = JSON.parse(localStorage.getItem('datos'));
        mijson2 = JSON.parse(localStorage.getItem('Salones'));
    } catch (error) {
        console.error(error);
        return;
    }

    const TrainersP = mijson['Datos']['Trainer_Principales'];
    const TrainersS = mijson['Datos']['Trainers_Secundarios'];

    console.log("Estos son los puestos de Trainers principales que están desocupados en este momento:\n");

    for (let i = 0; i < TrainersP.length; i++) {
        if (!TrainersP[i]['Nombre']) {
            console.log(`Puesto #${i + 1} desocupado`);
        } else {
            console.log(`Puesto #${i + 1} ocupado`);
        }
    }

    const añadir = parseInt(prompt("En cuál de los espacios deseas añadir al trainer (1, 2 o 3): "));

    if ([1, 2, 3].includes(añadir)) {
        if (!TrainersP[añadir - 1]['Nombre']) {
            console.log("Lista de entrenadores secundarios disponibles:");
            for (const trainer of TrainersS) {
                console.log(`ID: ${trainer['id']}, Nombre: ${trainer['Nombre']}`);
            }

            const TS = parseInt(prompt("Digite el ID del trainer secundario que desea pasar a principal: "));

            for (let i = 0; i < TrainersS.length; i++) {
                if (TrainersS[i]['id'] === TS) {
                    TrainersP[añadir - 1]['Nombre'] = TrainersS[i]['Nombre'];
                    TrainersP[añadir - 1]['Apellido1'] = TrainersS[i]['Apellido1'];
                    TrainersP[añadir - 1]['Identificacion'] = TrainersS[i]['Identificacion'];
                    TrainersP[añadir - 1]['Celular'] = TrainersS[i]['Celular'];
                    TrainersP[añadir - 1]['Telefono'] = TrainersS[i]['Telefono'];

                    // Actualizar el archivo Salones.json con el nombre del profesor
                    for (const [salon_numero, salon_info] of Object.entries(mijson2['Salones'])) {
                        if (parseInt(salon_numero) >= 4 * (añadir - 1) + 1 && parseInt(salon_numero) <= 4 * añadir) {
                            salon_info['Profesor'] = TrainersS[i]['Nombre'];
                        }
                    }

                    localStorage.setItem('Salones', JSON.stringify(mijson2));

                    TrainersS.splice(i, 1);
                    reindexarIDsEntrenadoresSecundarios(TrainersS);

                    // Guardar los cambios en el archivo datos.json
                    localStorage.setItem('datos', JSON.stringify(mijson));
                    break;
                }
            }
        } else {
            console.log("Puesto ocupado");
        }
    } else {
        console.log("Opción inválida. Debes seleccionar 1, 2 o 3.");
    }
}
