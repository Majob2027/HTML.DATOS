let heroes = [];

function AddData(event) {
    event.preventDefault();

    let characterName = document.getElementById('inputname').value;
    let actorName = document.getElementById('inputname2').value;
    let age = document.getElementById('inputEdad').value;
    let cityName = document.getElementById('inputubicacion').value;
    let poster = document.getElementById('inputposter').value;
    let dateAppears = document.getElementById('inputfecha').value;
    let producer = document.getElementById('inputproductora').value;

    let hero = {
        characterName: characterName,
        actorName: actorName,
        age: age,
        cityName: cityName,
        poster: poster,
        dateAppears: dateAppears,
        producer: producer
    };

    heroes.push(hero);

    UpdateTable();
}

function UpdateTable() {
    let tableBody = document.getElementById('tableData').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    heroes.forEach((hero, index) => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${hero.characterName}</td>
            <td>${hero.actorName}</td>
            <td>${hero.age}</td>
            <td>${hero.cityName}</td>
            <td>${hero.poster}</td>
            <td>${hero.dateAppears}</td>
            <td>${hero.producer}</td>
            <td>
                <button type="button" class="btn btn-info btn-sm" onclick="EditHero(${index})">Editar</button>
            </td>
        `;
    });
}

function EditHero(index) {
    let hero = heroes[index];

    document.getElementById('inputname').value = hero.characterName;
    document.getElementById('inputname2').value = hero.actorName;
    document.getElementById('inputEdad').value = hero.age;
    document.getElementById('inputubicacion').value = hero.cityName;
    document.getElementById('inputposter').value = hero.poster;
    document.getElementById('inputfecha').value = hero.dateAppears;
    document.getElementById('inputproductora').value = hero.producer;

    heroes.splice(index, 1);

    UpdateTable();
}

document.getElementById('btnAdd').addEventListener('click', AddData);
document.getElementById('btnSave').addEventListener('click', AddData);
window.addEventListener('load', UpdateTable);


///-----------------------------------

// Función para eliminar un héroe
function DeleteHero(index) {
    // Eliminar el héroe del array
    heroes.splice(index, 1);

    // Actualizar la tabla de héroes
    UpdateTable();
}

// Función para actualizar un héroe
function UpdateHero(index) {
    // Obtener el héroe del array usando el índice
    let hero = heroes[index];

    // Actualizar los datos del héroe con los valores del formulario
    hero.characterName = document.getElementById('inputname').value;
    hero.actorName = document.getElementById('inputname2').value;
    hero.age = document.getElementById('inputEdad').value;
    hero.cityName = document.getElementById('inputubicacion').value;
    hero.poster = document.getElementById('inputposter').value;
    hero.dateAppears = document.getElementById('inputfecha').value;
    hero.producer = document.getElementById('inputproductora').value;

    // Actualizar la tabla de héroes
    UpdateTable();
}

// Evento para eliminar un héroe cuando se hace clic en el botón "Eliminar"
function AddDeleteEventListeners() {
    let deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => DeleteHero(index));
    });
}

// Evento para actualizar un héroe cuando se hace clic en el botón "Actualizar"
function AddUpdateEventListeners() {
    let updateButtons = document.querySelectorAll('.btn-update');
    updateButtons.forEach((button, index) => {
        button.addEventListener('click', () => UpdateHero(index));
    });
}

// Función para construir la fila de la tabla con botones de editar y eliminar
function BuildTableRow(hero, index) {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${hero.characterName}</td>
        <td>${hero.actorName}</td>
        <td>${hero.age}</td>
        <td>${hero.cityName}</td>
        <td>${hero.poster}</td>
        <td>${hero.dateAppears}</td>
        <td>${hero.producer}</td>
        <td>
            <button type="button" class="btn btn-info btn-sm btn-update">Editar</button>
            <button type="button" class="btn btn-danger btn-sm btn-delete">Eliminar</button>
        </td>
    `;
    return row;
}

// Función para actualizar la tabla de héroes
function UpdateTable() {
    let tableBody = document.getElementById('tableData').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    heroes.forEach((hero, index) => {
        let row = BuildTableRow(hero, index);
        tableBody.appendChild(row);
    });

    // Agregar eventos a los botones de editar y eliminar
    AddDeleteEventListeners();
    AddUpdateEventListeners();
}

// Evento para agregar un nuevo héroe cuando se hace clic en el botón "Nuevo Heroe"
document.getElementById('btnAdd').addEventListener('click', AddData);

// Evento para guardar un héroe cuando se hace clic en el botón "Guardar Heroe"
document.getElementById('btnSave').addEventListener('click', AddData);

// Llamar a UpdateTable al cargar la página para mostrar cualquier héroe existente
window.addEventListener('load', UpdateTable);


