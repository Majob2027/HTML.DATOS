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

function displayHero(data) {
    let heroInfo = document.getElementById("superHeroInfo");
    let heroTableBody = document.getElementById("heroTableBody");
    
    if (data.response === "error") {
        heroInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        heroTableBody.innerHTML = `
            <tr>
                <td>${data.name}</td>
                <td>${formatPowerstats(data.powerstats)}</td>
                <td>${formatBiography(data.biography)}</td>
                <td>${formatAppearance(data.appearance)}</td>
                <td>${formatWork(data.work)}</td>
                <td>${formatConnections(data.connections)}</td>
                <td><img src="${data.image.url}" alt="${data.name}" style="max-width: 100px;"></td>
            </tr>`;
    }
}

function formatPowerstats(powerstats) {
    let formattedString = "<ul>";
    for (let stat in powerstats) {
        formattedString += `<li>${stat}: ${powerstats[stat]}</li>`;
    }
    formattedString += "</ul>";
    return formattedString;
}

function formatBiography(biography) {
    let formattedString = "<ul>";
    for (let info in biography) {
        formattedString += `<li>${info}: ${biography[info]}</li>`;
    }
    formattedString += "</ul>";
    return formattedString;
}

function formatAppearance(appearance) {
    let formattedString = "<ul>";
    for (let detail in appearance) {
        formattedString += `<li>${detail}: ${appearance[detail]}</li>`;
    }
    formattedString += "</ul>";
    return formattedString;
}

function formatWork(work) {
    let formattedString = "<ul>";
    for (let detail in work) {
        formattedString += `<li>${detail}: ${work[detail]}</li>`;
    }
    formattedString += "</ul>";
    return formattedString;
}

function formatConnections(connections) {
    let formattedString = "<ul>";
    for (let detail in connections) {
        formattedString += `<li>${detail}: ${connections[detail]}</li>`;
    }
    formattedString += "</ul>";
    return formattedString;
}



