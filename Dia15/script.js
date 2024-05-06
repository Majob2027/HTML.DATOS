function heroes(){
    let name= document.getElementById('inputname').value;
    let name2= document.getElementById('inputname2').value;
    let Edad= document.getElementById('inputEdad').value;
    let ubicacion= document.getElementById('inputubicacion').value;
    let poster= document.getElementById('inputposter').value;
    let fecha= document.getElementById('inputfecha').value;
    let productora= document.getElementById('inputproductora').value;


    if (name==""){
        alert ('El campo es obligatorio')
        return false;

    }
    if (name2==""){
        alert ('El campo es obligatorio')
        return false;

    }
    if (Edad==""){
        alert ('El campo es obligatorio')
        return false;

    }

    if (ubicacion==""){
        alert ('El campo es obligatorio')
        return false;

    }
    if (poster==""){
        alert ('El campo es obligatorio')
        return false;

    }
    if (fecha==""){
        alert ('El campo es obligatorio')
        return false;

    }
    if (productora==""){
        alert ('El campo es obligatorio')
        return false;

    }
}

//read
function readData() {
    let listapersonas;

if(localStorage.getItem('listapersonas)')== null){
    listapersonas= [];

}else{
    listapersonas=json.parse(localStorage.getItem('listapersonas'));
}

var html="";

listapersonas.forEach(function (element , index) {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.name2 + "</td>";
    html += "<td>" + element.Edad + "</td>";
    html += "<td>" + element.ubicacion + "</td>";
    html += "<td>" + element.poster + "</td>";
    html += "<td>" + element.fecha + "</td>";
    html += "<td>" + element.productora + "</td>";
    html += '<td><button onclick="deleteData('+ index +')" class="btn btn-danger">Eliminar Dato</button><button onclick="editData('+ index +')" class="btn btn-warning">Editar Dato</button>';
    html += "</tr>";

});

document.querySelector('#tableData').innerHTML=html;
  
}

document.onload = readData();

function AddData(){
    if (heroes() == true){
       console.log("hola")
        let name= document.getElementById('inputname').value;
        let name2= document.getElementById('inputname2').value;
        let Edad= document.getElementById('inputEdad').value;
        let ubicacion= document.getElementById('inputubicacion').value;
        let poster= document.getElementById('inputposter').value;
        let fecha= document.getElementById('inputfecha').value;
        let productora= document.getElementById('inputproductora').value;

        var listapersonas;

        if(localStorage.getItem('listapersonas') == null){
            listapersonas =[];
        }else{
            listapersonas=json.parse(localStorage.getItem('listapersonas'));
        }

        listapersonas.push({
            Nombre_personake: name,
            Nombre_actor : name2,
            Edad : Edad,
            Ubicacion : ubicacion,
            Poster: poster,
            Fecha: fecha,
            Productora: productora,
        });

        localStorage.setItem('listapersonas', JSON.stringify(listapersonas));

        readData();

        document.getElementById('inputname').value="";
        document.getElementById('inputname2').value="";
        document.getElementById('inputEdad').value="";
        document.getElementById('inputubicacion').value="";
        document.getElementById('inputposter').value="";
        document.getElementById('inputfecha').value="";
        document.getElementById('inputproductora').value="";


    }
}


