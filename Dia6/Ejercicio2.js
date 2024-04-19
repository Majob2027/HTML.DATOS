class rectangulo{
    constructor(ancho,alto){
        this.ancho=ancho
        this.alto=alto

    }
    area(){
        console.log (this.ancho*this.alto);
    }
    perimetro(){
        console.log ((this.ancho*2) + (this.alto*2));
    }

}

const rectangulo = new rectangulo (7,7);





Base = prompt ('Ingrese el valor de la base ', " ");
Altura= prompt('ingrese el valor de la altura ' , " ");

perimetro=((Base*2)+(Altuera*2)) 

Area = (Base*Altura)

console.log ("El area del perimetro es :" +perimetro)
console.log ("El area del perimetro es :" +Area)
