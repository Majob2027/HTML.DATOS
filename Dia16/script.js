document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('frmDataHero');
    const cuerpoTabla = document.querySelector('#tableData tbody');
    const btnGuardar = document.getElementById('btnSave');
    const btnAgregar = document.getElementById('btnAdd');
    const btnEliminar = document.getElementById('btnDelete');

    let filaEditando = null;

    btnAgregar.addEventListener('click', () => {
        limpiarFormulario();
    });

    btnGuardar.addEventListener('click', () => {
        if (validarFormulario()) {
            if (filaEditando) {
                actualizarFila();
            } else {
                agregarFila();
            }
        }
    });
    btnEliminar.addEventListener('click', () => {
        eliminarFila(filaEditando);
    });

    function eliminarFila(fila) {
        if (fila && filaEditando) {
            fila.remove();
            filaEditando = null;
        }
    }
    
    
    

    cuerpoTabla.addEventListener('click', (event) => {
        const objetivo = event.target;
        if (objetivo.tagName === 'BUTTON' && objetivo.classList.contains('btn-edit')) {
            editarFila(objetivo.closest('tr'));
        }
        if (objetivo.tagName === 'BUTTON' && objetivo.classList.contains('btn-delete')) {
            eliminarFila(objetivo.closest('tr'));
        }
    });

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        btnGuardar.click();
    });

    function agregarFila() {
        const datosFormulario = obtenerDatosFormulario();
        const nuevaFila = cuerpoTabla.insertRow();
        nuevaFila.innerHTML = `
            <td>${datosFormulario.nombrePersonaje}</td>
            <td>${datosFormulario.nombreActor}</td>
            <td>${datosFormulario.edadActor}</td>
            <td>${datosFormulario.ubicacion}</td>
            <td>${datosFormulario.poster}</td>
            <td>${datosFormulario.fechaAparicion}</td>
            <td>${datosFormulario.productora}</td>
            <td>
                <button type="button" class="btn btn-sm btn-primary btn-edit">Editar</button>
                <button type="button" class="btn btn-sm btn-danger btn-delete">Eliminar</button>
            </td>
        `;
    }

    function actualizarFila() {
        const datosFormulario = obtenerDatosFormulario();
        filaEditando.cells[0].textContent = datosFormulario.nombrePersonaje;
        filaEditando.cells[1].textContent = datosFormulario.nombreActor;
        filaEditando.cells[2].textContent = datosFormulario.edadActor;
        filaEditando.cells[3].textContent = datosFormulario.ubicacion;
        filaEditando.cells[4].textContent = datosFormulario.poster;
        filaEditando.cells[5].textContent = datosFormulario.fechaAparicion;
        filaEditando.cells[6].textContent = datosFormulario.productora;
        filaEditando = null;
    }

    function editarFila(fila) {
        const celdas = fila.cells;
        formulario.nombrePersonaje.value = celdas[0].textContent;
        formulario.nombreActor.value = celdas[1].textContent;
        formulario.edadActor.value = celdas[2].textContent;
        formulario.ubicacion.value = celdas[3].textContent;
        formulario.poster.value = celdas[4].textContent;
        formulario.fechaAparicion.value = celdas[5].textContent;
        formulario.productora.value = celdas[6].textContent;
        filaEditando = fila;
    }

    function eliminarFila(fila) {
        if (fila) {
            fila.remove();
            limpiarFormulario();
        }
        filaEditando = null;
    }

    function limpiarFormulario() {
        formulario.reset();
        filaEditando = null;
    }

    function obtenerDatosFormulario() {
        return {
            nombrePersonaje: formulario.characterName.value.trim(),
            nombreActor: formulario.actorName.value.trim(),
            edadActor: formulario.age.value.trim(),
            ubicacion: formulario.cityName.value.trim(),
            poster: formulario.poster.value.trim(),
            fechaAparicion: formulario.dateAppears.value.trim(),
            productora: formulario.producer.value.trim()
        };
    }

    function validarFormulario() {
        const datosFormulario = obtenerDatosFormulario();
        if (datosFormulario.nombrePersonaje === '' ||
            datosFormulario.nombreActor === '' ||
            datosFormulario.edadActor === '' ||
            datosFormulario.ubicacion === '' ||
            datosFormulario.poster === '' ||
            datosFormulario.fechaAparicion === '' ||
            datosFormulario.productora === '') {
            alert('Por favor, complete todos los campos.');
            return false;
        }
        return true;
    }
});


