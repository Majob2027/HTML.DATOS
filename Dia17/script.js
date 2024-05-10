class webcomponets extends HTMLElement{
    constructor(){
        super();
        this.render();

        
    }

    render(){
        this.innerHTML = `
            <div class="recuadro"> </div>
            <div class="cuadro2"> </div>
            <div class="cuadro3"> </div>
            <div class="linea"> </div>
            <div style="position: absolute;"> 
                <img src="./imagenes/nombre.png" alt="Nombre" class="icono1" onmouseover="nombre();"> 
                <img src="./imagenes/email1.png" alt="email" class="icono2" onmouseover="email();"> 
                <img src="./imagenes/notas.png" alt="Nose" class="icono3" onmouseover="fecha();"> 
                <img src="./imagenes/telefono.png" alt="Telefono" class="icono4" onmouseover="telefono();"> 
                <img src="./imagenes/ubicacion.png" alt="ubicacion" class="icono5" onmouseover="adress();"> 
                <img src="./imagenes/contraseña.png" alt="Nombre" class="icono6" onmouseover="contraseña();"> 
            </div>
            
            <div style="color: rgb(0, 0, 0); position:absolute; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
                <p id="titulo1">Hi, My name is</p>
                <p id="titulo2">My email address is</p>
                <p id="titulo3">My birthday is</p>
                <p id="titulo4">My address is</p>
                <p id="titulo5">My phone number is</p>
                <p id="titulo6">My password is</p>
                
                <p id=firstName class="texto1"> </p>
                <p id="email" class="texto2" >  </p>
                <p id="date" class="texto3"> </p>
                <p id="street" class="texto4"> </p>
                <p id="phone" class="texto5"> </p>
                <p id="password" class="texto6"></p>
                <img id="image" src="" alt="User Image" class="img">
                
                </div>
                `}

}

customElements.define('web-componets' , webcomponets);







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
            let password = data.results[0].login.password;
            let image = data.results[0].picture.large;

            document.getElementById('firstName').textContent = `${firstName} ${lastName}`;
            document.getElementById('email').textContent = email;
            document.getElementById('date').textContent = date;
            document.getElementById('street').textContent = `${streetNumber} ${streetName}`;
            document.getElementById('phone').textContent = phone;
            document.getElementById('password').textContent = password;
            document.getElementById('image').src = image;
        })
        .catch(error => {
            console.error('Ocurrió un problema con tu función: ', error);
        });
}

GetUser();
ocultartodos()

function nombre(){
    document.getElementById('firstName').style.display = '';
    document.getElementById('email').style.display = 'none';
    document.getElementById('date').style.display = 'none';
    document.getElementById('street').style.display = 'none';
    document.getElementById('phone').style.display = 'none';
    document.getElementById('password').style.display = 'none';
    document.getElementById('image').style.display = '';
    document.getElementById('titulo1').style.display = '';
    document.getElementById('titulo2').style.display = 'none';
    document.getElementById('titulo3').style.display = 'none';
    document.getElementById('titulo4').style.display = 'none';
    document.getElementById('titulo5').style.display = 'none';
    document.getElementById('titulo6').style.display = 'none';

}
function email(){
    document.getElementById('firstName').style.display = 'none';
    document.getElementById('email').style.display = '';
    document.getElementById('date').style.display = 'none';
    document.getElementById('street').style.display = 'none';
    document.getElementById('phone').style.display = 'none';
    document.getElementById('password').style.display = 'none';
    document.getElementById('image').style.display = '';
    document.getElementById('titulo1').style.display = 'none';
    document.getElementById('titulo2').style.display = '';
    document.getElementById('titulo3').style.display = 'none';
    document.getElementById('titulo4').style.display = 'none';
    document.getElementById('titulo5').style.display = 'none';
    document.getElementById('titulo6').style.display = 'none';
}
function fecha(){
    document.getElementById('firstName').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('date').style.display = '';
    document.getElementById('street').style.display = 'none';
    document.getElementById('phone').style.display = 'none';
    document.getElementById('password').style.display = 'none';
    document.getElementById('image').style.display = '';
    document.getElementById('titulo1').style.display = 'none';
    document.getElementById('titulo2').style.display = 'none';
    document.getElementById('titulo3').style.display = '';
    document.getElementById('titulo4').style.display = 'none';
    document.getElementById('titulo5').style.display = 'none';
    document.getElementById('titulo6').style.display = 'none';
}

function adress(){
    document.getElementById('firstName').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('date').style.display = 'none';
    document.getElementById('street').style.display = '';
    document.getElementById('phone').style.display = 'none';
    document.getElementById('password').style.display = 'none';
    document.getElementById('image').style.display = '';
    document.getElementById('titulo1').style.display = 'none';
    document.getElementById('titulo2').style.display = 'none';
    document.getElementById('titulo3').style.display = 'none';
    document.getElementById('titulo4').style.display = '';
    document.getElementById('titulo5').style.display = 'none';
    document.getElementById('titulo6').style.display = 'none';
}
function telefono(){
    document.getElementById('firstName').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('date').style.display = 'none';
    document.getElementById('street').style.display = 'none';
    document.getElementById('phone').style.display = '';
    document.getElementById('password').style.display = 'none';
    document.getElementById('image').style.display = '';
    document.getElementById('titulo1').style.display = 'none';
    document.getElementById('titulo2').style.display = 'none';
    document.getElementById('titulo3').style.display = 'none';
    document.getElementById('titulo4').style.display = 'none';
    document.getElementById('titulo5').style.display = '';
    document.getElementById('titulo6').style.display = 'none';
}
function contraseña(){
    document.getElementById('firstName').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('date').style.display = 'none';
    document.getElementById('street').style.display = 'none';
    document.getElementById('phone').style.display = 'none';
    document.getElementById('password').style.display = '';
    document.getElementById('image').style.display = '';
    document.getElementById('titulo1').style.display = 'none';
    document.getElementById('titulo2').style.display = 'none';
    document.getElementById('titulo3').style.display = 'none';
    document.getElementById('titulo4').style.display = 'none';
    document.getElementById('titulo5').style.display = 'none';
    document.getElementById('titulo6').style.display = '';
}

function ocultartodos(){
    document.getElementById('firstName').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('date').style.display = 'none';
    document.getElementById('street').style.display = 'none';
    document.getElementById('phone').style.display = 'none';
    document.getElementById('password').style.display = 'none';
    document.getElementById('image').style.display = '';
    document.getElementById('titulo1').style.display = 'none';
    document.getElementById('titulo2').style.display = 'none';
    document.getElementById('titulo3').style.display = 'none';
    document.getElementById('titulo4').style.display = 'none';
    document.getElementById('titulo5').style.display = 'none';
    document.getElementById('titulo6').style.display = 'none';
}




