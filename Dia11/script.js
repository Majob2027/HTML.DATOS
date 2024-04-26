// Función para obtener la información de un Pokémon
function getPokemonInfo(pokemonNameOrId) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Página fuera de servicio');
            }
            return response.json();
        })
        .then(data => {
            const pokemonid = data.id;
            const pokemonName = data.name;
            const pokemonAnimatedSpriteUrl = data.sprites.versions['generation-v']['black-white'].animated.front_default;

            document.getElementById('pokemonid').textContent = `${pokemonid}-`
            document.getElementById('pokemonName').textContent = `${pokemonName}`;
            document.getElementById('pokemonImage').src = pokemonAnimatedSpriteUrl;
        })
        .catch(error => {
            console.error('Ocurrió un problema con tu función: ', error);
        });
}


const pokemonInput = document.getElementById('pokemonInput');
const clearBtn = document.getElementById('clearBtn');
const prevBtn = document.querySelector('.button1');
const nextBtn = document.querySelector('.button2');


clearBtn.addEventListener('click', function() {
  pokemonInput.value = '';
});


pokemonInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    getPokemonInfo(pokemonInput.value.toLowerCase());
    pokemonInput.value = '';
  }
});


prevBtn.addEventListener('click', function() {
  const currentPokemonId = parseInt(document.getElementById('pokemonid').textContent);
  const prevPokemonId = currentPokemonId - 1;
  if (prevPokemonId > 0) {
    getPokemonInfo(prevPokemonId);
  }
});


nextBtn.addEventListener('click', function() {
  const currentPokemonId = parseInt(document.getElementById('pokemonid').textContent);
  const nextPokemonId = currentPokemonId + 1;
  getPokemonInfo(nextPokemonId);
});


