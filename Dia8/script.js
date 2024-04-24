
const fetchAndDisplayInfo = (url, listId) => {
    fetch(url)
        .then(response => response.json())
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
                <h2>${data.name}</h2>
                <p><strong>Height:</strong> ${data.height}</p>
                <p><strong>Mass:</strong> ${data.mass}</p>
                <p><strong>Hair color:</strong> ${data.hair_color}</p>
                <p><strong>Skin color:</strong> ${data.skin_color}</p>
                <p><strong>Eye color:</strong> ${data.eye_color}</p>
                <p><strong>Birthday:</strong> ${data.birth_year}</p>
                <p><strong>Gender:</strong> ${data.gender}</p>
                <p><strong>Homeworld:</strong></p>
                <ul id="homeworldInfo"></ul>
                <p><strong>Movies:</strong></p>
                <ul id="filmsList"></ul>
                <p><strong>Species:</strong></p>
                <ul id="speciesList"></ul>
                <p><strong>Starships:</strong></p>
                <ul id="starshipsList"></ul>
                <p><strong>Created:</strong> ${data.created}</p>
                <p><strong>Last edited:</strong> ${data.edited}</p>
                <p><strong>URL:</strong> ${data.url}</p>
            `;

            document.getElementById('resultado').innerHTML = template;

            fetchAndDisplayInfo(data.homeworld, 'homeworldInfo');
            data.films.forEach(film => fetchAndDisplayInfo(film, 'filmsList'));
            data.species.forEach(species => fetchAndDisplayInfo(species, 'speciesList'));
            data.starships.forEach(starship => fetchAndDisplayInfo(starship, 'starshipsList'));
        })
        .catch(displayError); 
};

document.getElementById('apiForm').addEventListener('submit', handleSubmit);



