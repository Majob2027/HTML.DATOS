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


