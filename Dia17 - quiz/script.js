function GetUser() {
    const apiUrl = `https://randomuser.me/api/`;

    console.log("Hola");

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Página fuera de servicio');
            }
            return response.json();
        })
        .then(data => {
            let firstName = data.results[0].name.first;
            let lastName = data.results[0].name.last;
            let email = data.results[0].email;
            let date = data.results[0].dob.date;
            let streetNumber = data.results[0].location.street.number;
            let streetName = data.results[0].location.street.name;
            let phone = data.results[0].phone;
            let image = data.results[0].picture.large;

            document.getElementById('firstName').textContent = firstName;
            document.getElementById('lastName').textContent = lastName;
            document.getElementById('email').textContent = email;
            document.getElementById('date').textContent = date;
            document.getElementById('street').textContent = `${streetNumber} ${streetName}`;
            document.getElementById('phone').textContent = phone;
            document.getElementById('image').src = image;
        })
        .catch(error => {
            console.error('Ocurrió un problema con tu función: ', error);
        });
}

GetUser();