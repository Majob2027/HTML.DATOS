let cartaSeleccionada = null;
let cartasMostradas = [];

// Función para cargar las cartas desde la API
async function cargarCartas() {
    try {
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=3');
        const data = await response.json();
        cartasMostradas = data.cards;
        mostrarCartas(cartasMostradas);
    } catch (error) {
        console.error('Hubo un error al cargar las cartas:', error);
    }
}

// Función para mostrar las cartas en la página
function mostrarCartas(cartas) {
    const contenedor = document.getElementById('cardContainer');
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas cartas
    cartas.forEach((carta, index) => {
        const cartaHTML = `
            <div class="card" id="card${index}" onclick="seleccionarCarta(${index})">
                <img src="${carta.image}" alt="${carta.value} ${carta.suit}">
            </div>
        `;
        contenedor.innerHTML += cartaHTML;
    });
}

// Función para seleccionar una carta
function seleccionarCarta(index) {
    const cartaActual = cartasMostradas[index].image;

    if (cartaSeleccionada === null) {
        // Si es el primer clic, guardar la URL de la carta seleccionada
        cartaSeleccionada = cartaActual;
        document.getElementById(`card${index}`).classList.add('seleccionada');
    } else {
        // Si es el segundo clic, comparar las URLs de las cartas seleccionadas
        if (cartaSeleccionada === cartaActual) {
            // Cartas iguales, se ha ganado el juego
            alert('¡Has ganado el juego!');
            reiniciarJuego();
        } else {
            // Cartas diferentes, mostrar mensaje de intentar nuevamente
            alert('¡Inténtalo de nuevo!');
            document.getElementById(`card${index}`).classList.remove('seleccionada');
            document.querySelectorAll('.card').forEach(card => {
                card.classList.remove('seleccionada');
            });
        }
        // Reiniciar la carta seleccionada para la próxima comparación
        cartaSeleccionada = null;
    }

    console.log("Carta seleccionada: ", cartaActual);
}




// Función para reiniciar el juego
function reiniciarJuego() {
    cartaSeleccionada = null;
    cargarCartas();
}

// Función para reorganizar aleatoriamente las cartas
function reorganizarCartas() {
    // Obtener una lista de índices aleatorios únicos
    const indicesAleatorios = [];
    while (indicesAleatorios.length < cartasMostradas.length) {
        const indiceAleatorio = Math.floor(Math.random() * cartasMostradas.length);
        if (!indicesAleatorios.includes(indiceAleatorio)) {
            indicesAleatorios.push(indiceAleatorio);
        }
    }

    // Reorganizar las cartas en función de los índices aleatorios
    const cartasReorganizadas = indicesAleatorios.map(indice => cartasMostradas[indice]);

    // Mostrar las cartas reorganizadas
    mostrarCartas(cartasReorganizadas);
}

cargarCartas();

// Función para reiniciar el juego
function reiniciarJuego() {
    cartaSeleccionada = null;
    cargarCartas();
    setTimeout(() => {
        reorganizarCartas();
        setTimeout(() => {
            reorganizarCartas();
            setTimeout(reorganizarCartas, 1000);
        }, 1000);
    }, 5000);
}

