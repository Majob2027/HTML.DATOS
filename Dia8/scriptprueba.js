function JSONRequest(){

    let request = new XMLHttpRequest();
    let url = `https://swapi.py4e.com/api/people`;
    request.open('GET', url);
    request.onload = function() {debugger;
       let todo = JSON.parse(this.responseText);
       document.getElementById("output").innerHTML = todo.title;
    }
    request.send();
}

JSONRequest();