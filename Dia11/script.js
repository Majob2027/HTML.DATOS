function pokemongif(){
    const pokemoninput= document.getElementById ('pokemonid').value.tolowercase();
    const apiUrl =`https://pokeapi.co/api/v2/pokemon/${pokemoninput}`;


    fetch(apiUrl)
    .then(reponse => {
        if (!reponse.ok){
        throw new Eror (`La pagina no sirve por favor ingrese mas tarde`);
    }
    return Response.json()
})

then(data=> {
    const pokemonid= data.id
    const pokemoName= data.name
    const pokemonAnimatedSpriteUrl = data.sprites.versions['generation-v']['black-white'].animated.front_default;

    document.getElementById('pokemonid').textContent = `${pokemonid}`
    document.getElementById('pokemoName').textContent = `${pokemoName}`;
    document.getElementById('pokemonImage').src = pokemonAnimatedSpriteUrl;
    })
        .catch(error => {
        console.error('Ocurrio un problema con tu función: ', error);
    });

}



