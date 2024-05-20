let cartaSeleccionada = null;
let cartasMostradas = [];

async function cargarCartas() {
    try {
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=3');
        const data = await response.json();
        cartasMostradas = data.cards.map((carta, index) => ({ ...carta, id: index }));
    } catch (error) {
        console.error('Hubo un error al cargar las cartas:', error);
    }
}





function mostrarCartas(cartas) {
    const contenedor = document.getElementById('cardContainer');
    contenedor.innerHTML = ''; 
    cartas.forEach((carta) => {
        const cartaHTML = `
            <div class="card" id="card${carta.id}" onclick="seleccionarCarta(${carta.id})">
                <img src="${carta.image}" alt="${carta.value} ${carta.suit}">
            </div>
        `;
        contenedor.innerHTML += cartaHTML;
    });
}






function reorganizarCartas() {
    const indicesAleatorios = [];
    while (indicesAleatorios.length < cartasMostradas.length) {
        const indiceAleatorio = Math.floor(Math.random() * cartasMostradas.length);
        if (!indicesAleatorios.includes(indiceAleatorio)) {
            indicesAleatorios.push(indiceAleatorio);
        }
    }
    const cartasReorganizadas = indicesAleatorios.map(indice => cartasMostradas[indice])
    mostrarCartas(cartasReorganizadas);
}

function reiniciarJuego() {
    cartaSeleccionada = null;
    cargarCartas();
    setTimeout(() => {
        reorganizarCartas();
        cargarCartas(); 
        setTimeout(reorganizarCartas, 1000); 
    }, 4000); 
}







// Función para seleccionar una carta
function seleccionarCarta(id) {
    const cartaActual = id;
    if (cartaSeleccionada === null) {
        cartaSeleccionada = cartaActual;
    } else {
        if (cartaSeleccionada === cartaActual) {
            alert('¡Has ganado el juego!');
            reiniciarJuego();
        } else {
            alert('¡Inténtalo de nuevo!');
        }
        cartaSeleccionada = null;
    }

    console.log("Carta seleccionada: ", cartaActual);
}

cargarCartas();

