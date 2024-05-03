const form = document.getElementById('crud-form');
const userList = document.getElementById('user-list');

let users = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const nameactorInput = document.getElementById('nameactor');
    const edadInput = document.getElementById('edad');
    const ubicacionInput = document.getElementById('ubicacion');
    const posterInput = document.getElementById('poster');
    const ubicacion2Input = document.getElementById('ubicacion2');

    const newUser = {
        name: nameInput.value,
        nameactor: nameactorInput.value,
        edad: edadInput.value,
        ubicacion: ubicacionInput.value,
        poster: posterInput.value,
        ubicacion2: ubicacion2Input.value
    };

    users.push(newUser);
    renderUser(newUser);

    nameInput.value = '';
    nameactorInput.value = '';
    edadInput.value = '';
    ubicacionInput.value = '';
    posterInput.value = '';
    ubicacion2Input.value = '';
});

function renderUser(user) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>Name:</span>${user.name}<br>
        <span>Actor Name:</span>${user.nameactor}<br>
        <span>Edad:</span>${user.edad}<br>
        <span>Ubicacion:</span>${user.ubicacion}<br>
        <span>Poster:</span>${user.poster}<br>
        <span>Ubicacion 2:</span>${user.ubicacion2}<br>
        <button class="delete-btn">Delete</button>
    `;
    userList.appendChild(li);

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        deleteUser(user);
        li.remove();
    });
}

function deleteUser(userToDelete) {
    users = users.filter(user => user !== userToDelete);
}
