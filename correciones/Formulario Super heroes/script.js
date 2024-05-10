document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('frmDataHero');
    const cuerpoTabla = document.querySelector('#tableData tbody');
    const btnGuardar = document.getElementById('btnSave');
    const btnlimpiar = document.getElementById('btnclean');
    const btnclean = document.getElementById('btnlimpiar');


    let filaEditando = null;

    btnlimpiar.addEventListener('click', () => {
        limpiarFormulario();
    });
    btnclean.addEventListener('click', () => {
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
            <td>${datosFormulario.traje}</td>
            <td>
                <button type="button" class="btn btn-sm btn-primary btn-edit">Editar</button>
                <button type="button" class="btn btn-sm btn-danger btn-delete">Eliminar</button>
            </td>
        `;
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
            productora: formulario.producer.value.trim(),
            traje: formulario.traje.value.trim()
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
            datosFormulario.traje === '' ||
            datosFormulario.productora === '') {
            alert('Por favor, complete todos los campos.');
            return false;
        }
        return true;
    }

    function editarFila(fila) {
        filaEditando = fila;
        const celdas = fila.cells;
        formulario.characterName.value = celdas[0].textContent;
        formulario.actorName.value = celdas[1].textContent;
        formulario.age.value = celdas[2].textContent;
        formulario.cityName.value = celdas[3].textContent;
        formulario.poster.value = celdas[4].textContent;
        formulario.dateAppears.value = celdas[5].textContent;
        formulario.producer.value = celdas[6].textContent;
        formulario.traje.value = celdas[7].textContent;
    }

    function actualizarFila() {
        const datosFormulario = obtenerDatosFormulario();
        const celdas = filaEditando.cells;
        celdas[0].textContent = datosFormulario.nombrePersonaje;
        celdas[1].textContent = datosFormulario.nombreActor;
        celdas[2].textContent = datosFormulario.edadActor;
        celdas[3].textContent = datosFormulario.ubicacion;
        celdas[4].textContent = datosFormulario.poster;
        celdas[5].textContent = datosFormulario.fechaAparicion;
        celdas[6].textContent = datosFormulario.productora;
        celdas[7].textContent = datosFormulario.traje;
        limpiarFormulario();
    }
});


function toggleInput() {
    const trajeInput = document.getElementById('traje');
    trajeInput.style.display = trajeInput.style.display === 'none' ? 'inline' : 'none';
}

