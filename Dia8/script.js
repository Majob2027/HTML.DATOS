const fetchAndDisplayInfo = (url, listId) => {
    fetch(url)
        .then(response => response.json())
        .then(info => {
            const infoItem = document.createElement('li');
            infoItem.textContent = info.name || info.title;
            document.getElementById(listId).appendChild(infoItem);
        })
        .catch(error => console.error('Error al obtener info:', error));
};

const displayError = (error) => {
    console.error('Error al consultar el API:', error);
    document.getElementById('resultado').innerHTML = 'Error galáctico. Por favor, elija un nuevo personaje.';
};

const handleSubmit = (e) => {
    e.preventDefault(); 

    const id = document.getElementById('idInput').value;

    const apiUrl = 'https://swapi.py4e.com/api/people';

    fetch(apiUrl + '/' + id)
        .then(response => response.json()) 
        .then(data => {
            const template = `
                <table class="table table-bordered border-white table-dark-transparent">
                <tr>
                <th class="text-white"><strong>Name:</strong></th>
                <td class="text-white">${data.name}</td>
                </tr> 
                <tr>
                <th class="text-white"><strong>Height:</strong></th>
                <td class="text-white">${data.height}</td>
                </tr> 
                <tr>
                <th class="text-white"><strong>Mass:</strong></th>
                <td class="text-white">${data.mass}</td>
                </tr>
                <tr>
                <th class="text-white"><strong>Hair color:</strong></th>
                <td class="text-white">${data.hair_color}</td>
                </tr>
                <tr>
                <th class="text-white"><strong>Skin color:</strong></th>
                <td class="text-white">${data.skin_color}</td>
                </tr>
                <tr>
                <th class="text-white"><strong>Eye color:</strong></th>
                <td class="text-white">${data.eye_color}</td>
                </tr>
                <tr>
                <th class="text-white"><strong>Birth year:</strong></th>
                <td class="text-white">${data.birth_year}</td>
                </tr>
                <tr>
                <th class="text-white"><strong>Gender:</strong></th>
                <td class="text-white">${data.gender}</td>
                </tr>
                <tr>
                <th class="text-white"><strong>Homeworld:</strong></th>
                <td class="text-white"><p id="homeworldInfo"></p></td>
                </tr>
                <tr>
                <th class="text-white"><strong>Movies:</strong></th>
                <td class="text-white"><p id="filmsList"></p></td>
                </tr>
                <tr>
                <th class="text-white"><strong>Species:</strong></th>
                <td class="text-white"><p id="speciesList"></p></td>
                </tr>
                <tr>
                <th class="text-white"><strong>Vehicles:</strong></th>
                <td class="text-white"><p id="vehicleslist"></p></td>
                </tr>
                <tr>
                <th class="text-white"><strong>Starships:</strong></th>
                <td class="text-white"><p id="starshipsList"></p></td>
                </tr>
                <tr>
                <th class="text-white"><strong>Created:</strong></th>
                <td class="text-white">${data.created}</td>
                </tr>
                <tr>
                <th class="text-white"><strong>Last edited:</strong></th>
                <td class="text-white">${data.edited}</td>
                </tr>
                <tr>
                <th class="text-white"><strong>URL:</strong></th>
                <td class="text-white">${data.url}</td>
                </tr>
                </table>
            `;
            document.getElementById('resultado').innerHTML = template;

            fetchAndDisplayInfo(data.homeworld, 'homeworldInfo');
            data.films.forEach(film => fetchAndDisplayInfo(film, 'filmsList'));
            data.species.forEach(species => fetchAndDisplayInfo(species, 'speciesList'));
            data.starships.forEach(starship => fetchAndDisplayInfo(starship, 'starshipsList'));
            data.vehicles.forEach(vehicles => fetchAndDisplayInfo(vehicles, 'vehicleslist'));


        })
        .catch(displayError); 
};

document.getElementById('apiForm').addEventListener('submit', handleSubmit);
