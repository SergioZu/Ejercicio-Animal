class Animal{
    constructor(especie,habitat,edad){
        this.especie=especie;
        this.habitat=habitat;
        this.edad=edad;
    }

    getAnimal(){
        return " Especie: "+ this.especie+" Habitat: "+this.habitat+" Edad: "+this.edad+" ";
    }
}


class AnimalDomestico extends Animal{
    constructor(especie,habitat,edad,nombre,identificador,vacunado){
        super(especie,habitat,edad);
        this.nombre=nombre;
        this.identificador=identificador;
        this.vacunado=vacunado;
        
    }

    getAnimalDomestico(){
        return "Nombre: "+this.nombre+" Id: "+this.identificador+" Vacuno: "+this.vacunado+super.getAnimal()+" ";
    }
}




class AnimalSalvaje extends Animal{
    
    constructor(especie,habitat,edad,cautivo,peligroExtincion){
        super(especie,habitat,edad);
        this.cautivo=cautivo;
        this.peligroExtincion=peligroExtincion;
       
    }

    getAnimalSalvaje(){
        return " Cautivo: "+this.cautivo+" Extincion: "+this.peligroExtincion+super.getAnimal()+" ";
    }
}

function mascota(){
    let especie=prompt("Nombre: ");
    let habitat=prompt("ID: ");
    let edad=prompt("Vacunado: ");
    let nombre=prompt("Especie: ");
    let identificador=prompt("Habitat: ");
    let vacunado=prompt("Edad: ");

    let animal=new AnimalDomestico(especie,habitat,edad,nombre,identificador,vacunado);

    alert(animal.getAnimalDomestico());
}

function salvaje(){
    let especie=prompt("Nombre: ");
    let habitat=prompt("ID: ");
    let edad=prompt("Vacunado: ");
    let cautivo=prompt("Cautivo: ");
    let peligroExtincion=prompt("Peligro de Extincion: ");

    let animal=new AnimalDomestico(especie,habitat,edad,cautivo,peligroExtincion);

    alert(animal.getAnimalDomestico());
}