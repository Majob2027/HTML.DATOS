console.log(`
**************************************************
*                   Bienvenido                   *
**************************************************

`);

while (true) {
    console.log(`
    Cual es tu ROL en CAMPUSLANDS
    \n1. Coordinador\t 2. Trainer\t 3. Salir

    `);
    const Rol = prompt("1--->");

    if (Rol == 1) {
        while (true) {
            console.log("**************************************************");
            console.log("*             Bienvenido Coordinador             *");
            console.log("**************************************************");
            console.log(" ");
            console.log("A cual modulo desea ingresar: ");
            console.log(" ");
            console.log("1. Camper\t2. Trainer\t");
            console.log("");
            console.log("3. Reportes\t4. Rutas\t");
            console.log(" ");
            console.log("5. Ir al modulo anterior");
            
            const decision = prompt("--->")

            if (decision == 1) {
                console.log("**************************************************");
                console.log("*                  MODULO CAMPERS                *");
                console.log("**************************************************");
                console.log(" ");
                console.log("1. Inscribir Camper \t 2. Matricular Camper");
                console.log(" ");
                console.log("3. Rendimiento Camper\t 4. Mostrar lista de campers Riesgo alto");
                console.log(" ");
                console.log("5. Modulo anterior");
                const decision_camper = prompt("--->");
                if (decision_camper == 1) {
                    console.log("Inscribir Camper\n");
                    // print(CampersCRUD.MainCamperAñadir())
                }
                else if (decision_camper == 2) {
                    console.log("Matricular Camper\n");
                    // print(CampersCRUD.MainCamperAprobados())
    
                }
                else if (decision_camper == 3) {
                    console.log("Rendimiento Camper\n");
                    console.log("1. Actualizar notas finales  \t 2. Mirar lista de campers");
                    console.log(" ")
                    console.log("3. Mirar redimiento de camper\t 4. Ir al modulo anterior")
                    const decision = prompt("--->")
                    if (decision == 1) {
                        console.log("Actualizar notas finales\n");
                        console.log(" ");
                        console.log(" Que modulo desea actulizar");
                        console.log("");
                        console.log("1.  fundamentos de la programacion  \t 2. Programación Web ");
                        console.log(" ");
                        console.log("3. Programación formal\t 4. Bases de datos");
                        console.log("");
                        console.log("5. Backend");
                        const decision2 = prompt("--->");
                        console.log(" ");
                        if (decision2 == 1) {
                            console.log("**************************************************");
                            console.log("*        MODULO FUNDAMENTOS PROGRAMACION         *");
                            console.log("**************************************************");
                            // print(Modulonotas.NotasFundamentosProgramacion())
                        }
                        else if (decision2 == 2) {
                            console.log("**************************************************");
                            console.log("*             MODULO PROGRAMACION WEB            *");
                            console.log("**************************************************");
                            // print(Modulonotas.NotasProgramacionWeb())
                        }
                        else if (decision2 == 3) {
                            console.log("**************************************************");
                            console.log("*           MODULO PROGRAMACION FORMAL           *")
                            console.log("**************************************************");
                            // print(Modulonotas.NotasProgramacionFormal())
                        }
                        else if (decision2 == 4) {
                            console.log("**************************************************");
                            console.log("*              MODULO BASES DE DATOS             *");
                            console.log("**************************************************");
                            // print(Modulonotas.NotasFinalesBasesDeDatos())
                        }
                        else if (decision2 == 5) {
                            console.log("**************************************************");
                            console.log("*                 MODULO BACKEND                 *");
                            console.log("**************************************************");
                            // print(Modulonotas.NotasFinalesBackend())
                        }
                        else {
                            console.log("Opción no valida");
                        }
                    }
                    else if (decision == 2) {
                        console.log("Lista notas campers");
                        // print(Modulonotas.Mostrarlistarendimiento())
                        const x = promt("Digite cualquier tecla para continuar");
                    }
                    else if (decision == 3) {
                        console.log("Mirar redimiento de camper");
                        // print(Modulonotas.RedimencionCamper())
                        const x = promt("Digite cualquier tecla para continuar");
                    }
    
                }
                else if (decision_camper == 4) {
                    console.log("Lista de estudiantes en Riesgo alto");
                    // print(ModuloRalto.Riesgo_rendimiento())
                    const x = promt("Digite cualquier tecla para continuar");
    
                }
                else if (decision_camper == 5) {
                    console.log("Salir") 
                }

                else {
                    console.log("Opción no valida");
                }
            }
            else if (decision == 2) {
                console.log("**************************************************");
                console.log("*                MODULO TRAINERS                 *");
                console.log("**************************************************");
                console.log(" ");
                console.log("1. Añadir Trainer \t 2. Eliminar Trainer");
                console.log(" ");
                console.log("3. Asignar Trainer\t 4. Salir");

                const decision = prompt("--->");

                if (decision == 1) {
                    console.log("Añadir Trainer\n");
                    // print(TrainersCRUD.MainTrainersAñadir())
                }
                else if (decision == 2) {
                    console.log("Eliminar Trainer\n");
                    // print(TrainersCRUD.MainTrainersEliminar())
                }
                else if (decision == 3) {
                    console.log("Asignar Trainer\n");
                    // print(TrainersCRUD.MainAsignarTrainers())
                }
                else if (decision == 4) {
                    console.log("Ir al modulo anterior")
                }
                else {
                    console.log("Opción no valida");
                }
            }
            else if (decision == 3) {

                console.log("**************************************************");
                console.log("*                MODULO REPORTES                 *");
                console.log("**************************************************");
                console.log(" ");
                console.log("1. Campers que se encuentren en estado de INSCRITO");
                console.log("2. Campers que aprobaron el examen inicial ");
                console.log("3. Trainers Activos");
                console.log("4. Campers que se encuentren con bajo rendimiento");
                console.log("5. Campers y Trainers asociados a una ruta de entrenamiento");
                console.log("6. Campers aprobados y desaprobados");
                console.log("7. Ir al modulo anterior");
                
                const decision = prompt("--->"); 

                if (decision == 1) {
                    console.log("Campers que se encuentren en estado de INSCRITO");
                    // print(ModuloReportes.Listainscritos())
                    const x = promt("Digite cualquier tecla para continuar");
                }
                else if (decision == 2) {
                    console.log("Campers que aprobaron el examen inicial ");
                    // print(ModuloReportes.ListaAprobaronExamen())
                    const x = promt("Digite cualquier tecla para continuar");
                }
                else if (decision == 3) {
                    console.log("Trainers Activos");
                    // print(ModuloReportes.listatrainerscampus())
                    const x = promt("Digite cualquier tecla para continuar");
                }
                else if (decision == 4) {
                    console.log("Campers que se encuentren con bajo rendimiento");
                    // print(ModuloReportes.bajo_rendimiento())
                    const x = promt("Digite cualquier tecla para continuar");
                }
                else if (decision == 5) {
                    console.log("Que ruta de entrenamiento desea elegir");
                    console.log("1. Ruta Java");
                    console.log("2. Ruta Netcore");
                    console.log("3. Ruta Nodecore");
                    const decision6 = promt("--->")
                    if (decision6 == 1) {
                        console.log("Ruta Java\n");
                        // print(ModuloReportes.c_y_p_asociados_Java())
                        const x = promt("Digite cualquier tecla para continuar");
                    }
                    else if (decision6 == 2) {
                        console.log("Ruta Netcore\n");
                        // print(ModuloReportes.c_y_p_asociados_Net())
                        const x = promt("Digite cualquier tecla para continuar");
                    }
                    else if (decision6 == 3) {
                        console.log("Ruta Nodecore\n");
                        // print(ModuloReportes.c_y_p_asociados_Node())
                        const x = promt("Digite cualquier tecla para continuar");
                    }
                }
                else if (decision == 6) {
                    console.log("Campers aprobados y desaprobados");
                    // print(ModuloReportes.Reporte6())
                    const x = promt("Digite cualquier tecla para continuar");
                }
                else if (decision == 7) {
                    console.log(" ")
                }
                else {
                    console.log("Opción no valida");
                }

            }
            else if (decision == 4) {
                console.log("**************************************************");
                console.log("*                MODULO RUTAS                    *");
                console.log("**************************************************");
                console.log("");
                console.log("1. Añadir Rutas  \t 2. Ir al modulo anterior");
                console.log(" ");
                const decision_ruta = prompt("--->")
                if (decision_ruta == 1) {
                    // print(modulorutas.Rutas())
                }
            }
            else if (decision == 5) {
                console.log(" ")
            }
            else {
                console.log("Opción no valida");
            }
        }

    }
    else if (Rol == 2) {
        while (true) {
            console.log("**************************************************");
            console.log("*             Bienvenido Trainer                 *");
            console.log("**************************************************");
            console.log(" ");
            console.log("A cual modulo desea ingresar: ");
            console.log(" ");
            console.log("1. Mostrar Horario\t2. Ir al modulo anterior\t");
            console.log("");        
            const decision = prompt("--->")
            
            if (decision == 1) {
                // print(TrainersHorario.HorarioTrainers())
            }
            else if (decision == 2) {
                break;
            }
            else {
                console.log("Opción no valida");
            }
        }

    }
    else if (Rol == 3) {
        break;
    }
    
}
