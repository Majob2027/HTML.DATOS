class usuario{
    constructor(Nombre,Edad,Pais){
        this.Nombre=Nombre
        this.Edad=Edad
        this.Pais=Pais

    } 
    
}

const usuario1= new usuario('Maria jose' , 17 , 'colombia')
const usuario2= new usuario('Juan carlos' , 18 , 'colombia')

console.log (usuario1,usuario2)