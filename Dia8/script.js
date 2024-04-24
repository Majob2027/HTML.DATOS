document.getElementById('apiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('idInput').value;
    const apiUrl = 'https://swapi.py4e.com/api/people';

    fetch(apiUrl + '/' + id)
        .then(response => response.json())
        .then(data => {
            const template = `
                <h2>${data.name}</h2>
                <p><strong>Height:</strong> ${data.height}</p>
                <p><strong>mass:</strong> ${data.mass}</p>
                <p><strong>Hair color:</strong> ${data.hair_color}</p>
                <p><strong>skin color:</strong> ${data.skin_color}</p>
                <p><strong>eye color:</strong> ${data.eye_color}</p>
                <p><strong>Birthday:</strong> ${data.birth_year}</p>
                <p><strong>Gender:</strong> ${data.gender}</p>
                <p><strong>Born world:</strong></p>
                <ul id="homeworldInfo"></ul>
                <p><strong>Movies:</strong></p>
                <ul id="filmsList"></ul>
                <p><strong>Species:</strong></p>
                <ul id="speciesList"></ul>
                <p><strong>Naves:</strong></p>
                <ul id="starshipsList"></ul>
                <p><strong>Created:</strong> ${data.created}</p>
                <p><strong>last edited:</strong> ${data.edited}</p>
                <p><strong>URL:</strong> ${data.url}</p>
            `;

            document.getElementById('result').innerHTML = template;

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

            fetchAndDisplayInfo(data.homeworld, 'homeworldInfo');
            data.films.forEach(film => fetchAndDisplayInfo(film, 'filmsList'));
            data.species.forEach(species => fetchAndDisplayInfo(species, 'speciesList'));
            data.starships.forEach(starship => fetchAndDisplayInfo(starship, 'starshipsList'));
        })
        .catch(error => {
            console.error('Error al consultar el API:', error);
            document.getElementById('result').innerHTML = ' error galactico por favor elija un nuevo personaje';
        });

        
});
message.txt

