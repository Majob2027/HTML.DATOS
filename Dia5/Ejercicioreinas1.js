function esSolucionValida(solucion) {
    for (let i = 0; i < solucion.length; i++) {
        for (let j = i + 1; j < solucion.length; j++) {
            if (solucion[i] === solucion[j] || Math.abs(solucion[i] - solucion[j]) === Math.abs(i - j)) {
                return false; // Reinas amenazándose en la misma fila, columna o diagonal
            }
        }
    }
    return true; // Solución válida
}

function generarSoluciones() {
    const soluciones = [];
    const filaActual = [];
    buscarSoluciones(0, filaActual, soluciones);
    return soluciones;
}

function buscarSoluciones(columna, filaActual, soluciones) {
    if (columna === 8) {
        if (esSolucionValida(filaActual)) {
            soluciones.push([...filaActual]);
        }
        return;
    }

    for (let fila = 0; fila < 8; fila++) {
        filaActual[columna] = fila;
        buscarSoluciones(columna + 1, filaActual, soluciones);
    }
}

function ordenarSolucionesConBurbuja(soluciones) {
    const n = soluciones.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (ataquesEntreReinas(soluciones[j]) > ataquesEntreReinas(soluciones[j + 1])) {
                // Intercambiar soluciones utilizando destructuring
                [soluciones[j], soluciones[j + 1]] = [soluciones[j + 1], soluciones[j]];
            }
        }
    }
}

function ataquesEntreReinas(solucion) {
    let ataques = 0;
    for (let i = 0; i < solucion.length; i++) {
        for (let j = i + 1; j < solucion.length; j++) {
            if (solucion[i] === solucion[j] || Math.abs(solucion[i] - solucion[j]) === Math.abs(i - j)) {
                ataques++;
            }
        }
    }
    return ataques;
}

// Generar soluciones
const soluciones = generarSoluciones();

// Ordenar soluciones con el método de burbuja
ordenarSolucionesConBurbuja(soluciones);


function imprimirTablero(solucion) {
    const tablero = [];
    for (let fila = 0; fila < 8; fila++) {
        let filaStr = '';
        for (let columna = 0; columna < 8; columna++) {
            if (solucion[columna] === fila) {
                filaStr += '(Q)';
            } else {
                filaStr += '*';
            }
        }
        tablero.push(filaStr);
    }
    console.log(tablero.join('\n'));
    console.log('\n');
}

// Imprimir soluciones ordenadas visualmente
soluciones.forEach((solucion, index) => {
    console.log(`Solución ${index + 1}:`);
    imprimirTablero(solucion);
});