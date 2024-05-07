function Getuser() {
    const apiUrl = `https://randomuser.me/api/`;

    console.log("hola")

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Página fuera de servicio');
            }
            return response.json();
        })
        .then(data => {
            let firstName = data.results[0].name.first
            let lastname = data.results[0].name.last
            let email = data.results[0].email
            let date = data.results[0].date
            let numerocalle = data.results[0].date
            let nombredecalle = data.nombredecalle;
            let phone = data.phone;
            let password = data.password;
            let image = data.image;
`
            document.getElementById('firstName').textContent = ${firsName}-`
            document.getElementById('lastname').textContent = `${lastname}`;
            document.getElementById('pokemonImage').src = pokemonAnimatedSpriteUrl;
        })
        .catch(error => {
            console.error('Ocurrió un problema con tu función: ', error);
        });
}
