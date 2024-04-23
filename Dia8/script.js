function fetchSuperHero(){
    let xhr = new XMLHttpRequest();
    let url = `https://swapi.py4e.com/api/people/1`;
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText)
            displayHero(response);
        } 
        else if(this.readyState == 4){
            console.log("Error:",this.statusText);
        }
    };
    
    xhr.send();
}

fetchSuperHero();

function displayHero(data){
    let heroInfo = document.getElementById('people');
    if (data.response === "error"){
        heroInfo.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        heroInfo.innerHTML = `
        <p>Nombre: ${data.name}</p>
        <p>Altura: ${data.height}</p>
        <p>Color cabello: ${data.hair_color}</p>
        <p>Color de piel: ${data.skin_color}</p>
        <p>Color de ojos: ${data.eye_color}</p>
        <p>Cumpleaños: ${data.birth_year}</p>
        <p>Género: ${data.gender}</p>
        `;
    }
}


