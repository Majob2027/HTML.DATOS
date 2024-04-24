function fetchSuperHero(){
    let xhr = new XMLHttpRequest();
    let heroID = document.getElementById("heroId").value;
    let apiKey = "f62ff62198a3bc82bbd53c14bf386cfb";
    let url = `https://www.superheroapi.com/api.php/${apiKey}/${heroID}`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayHero(response);
            displayAllHeroes(response); // Pasar el objeto response como argumento
        } else if(this.readyState == 4){
            console.log("Error:", this.statusText);
        }
    };
    xhr.send();
}

function displayHero(data){
    let heroInfo = document.getElementById("superHeroInfo");
    if (data.response === "error"){
        heroInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        heroInfo.innerHTML = `<p>Name: ${data.name}</p>`;
    }
}

function displayAllHeroes(data) { // Agregar 'data' como parámetro
    let heroInfo = document.getElementById("superHeroInfo");
    if (data.response === "error") {
        heroInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        let heroes = data.results;
        let names = heroes.map(hero => `<p>Name: ${hero.name}</p>`);
        heroInfo.innerHTML = names.join("");
    }
}
displayAllHeroes()


function powerHero() {
    let heroID = document.getElementById("heroId").value;
    let apikey = "487f7b22f68312d2c1bbc93b1aea445b"
    let url =` https://superheroapi.com/api.php/${apikey}/${heroID}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let powers = data.powerstats;
            let powersHTML = '<p>Poderes:</p><ul>';
            for (let power in powers) {
                powersHTML += `<li>${power}: ${powers[power]}</li>`;
            }
            document.getElementById('superHeroPower').innerHTML = powersHTML;
        })
        .catch(error => console.error('Error fetching powers:', error));
}

function biografhyHero() {
    let heroID = document.getElementById("heroId").value;
    let apikey = "487f7b22f68312d2c1bbc93b1aea445b"
    let url =` https://superheroapi.com/api.php/${apikey}/${heroID}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let biografhys = data.biografhy;
            let powersHTML = '<p>Biografia:</p><ul>';
            for (let biografhy in biografhys) {
                powersHTML += `<li>${biografhy}: ${biografhys[biografhy]}</li>`;
            }
            document.getElementById('superHeroBiografhy').innerHTML = powersHTML;
        })
        .catch(error => console.error('Error fetching biografhy:', error));
}

function AppearanceHero() {
    let heroID = document.getElementById("heroId").value;
    let apikey = "487f7b22f68312d2c1bbc93b1aea445b"
    let url =` https://superheroapi.com/api.php/${apikey}/${heroID}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let Appearances = data.Appearance;
            let powersHTML = '<p>Appearance:</p><ul>';
            for (let Appearance in Appearances) {
                powersHTML += `<li>${Appearance}: ${Appearances[Appearance]}</li>`;
            }
            document.getElementById('superHeroAppearance').innerHTML = powersHTML;
        })
        .catch(error => console.error('Error fetching Appearance:', error));
}

function WorkHero() {
    let heroID = document.getElementById("heroId").value;
    let apikey = "487f7b22f68312d2c1bbc93b1aea445b"
    let url =` https://superheroapi.com/api.php/${apikey}/${heroID}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let Work = data.Work;
            let powersHTML = '<p> Work:</p><ul>';
            for (let Works in Work) {
                powersHTML += `<li>${Works}: ${Work[Works]}</li>`;
            }
            document.getElementById('superHeroWork').innerHTML = powersHTML;
        })
        .catch(error => console.error('Error fetching Connections:', error));
}

function connectionsHero() {
    let heroID = document.getElementById("heroId").value;
    let apikey = "487f7b22f68312d2c1bbc93b1aea445b"
    let url =` https://superheroapi.com/api.php/${apikey}/${heroID}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let Connections = data.Connections;
            let powersHTML = '<p> Work:</p><ul>';
            for (let Works in Connections) {
                powersHTML += `<li>${Works}: ${Connections[Works]}</li>`;
            }
            document.getElementById('superHero').innerHTML = powersHTML;
        })
        .catch(error => console.error('Error fetching Connections:', error));
}

function ImageHero() {
    let heroID = document.getElementById("heroId").value;
    let apikey = "487f7b22f68312d2c1bbc93b1aea445b"
    let url =` https://superheroapi.com/api.php/${apikey}/${heroID}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let Connections = data.Connections;
            let powersHTML = '<p> Work:</p><ul>';
            for (let Works in Connections) {
                powersHTML += `<li>${Works}: ${Connections[Works]}</li>`;
            }
            document.getElementById('superHero').innerHTML = imageHTML;
        })
        .catch(error => console.error('Error fetching Connections:', error));
}