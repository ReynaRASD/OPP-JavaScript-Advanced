class pokemon{
    constructor(nombre, tipo){
      this.nombre = nombre;
      this.tipo = tipo; 
    }
    //metodos 
    atacar(){
        return console.log(`${this.nombre} está atacando.`)
    }
} 

//herencia con extends, osea pasa los mismos atributos del constructor anterior  
class Pikachu extends pokemon{
    // se crean las caracteristicas propias de este pikachu 
     constructor(nombre, tipo, edad){ 
         super(nombre, tipo); // super, hace referencia la constructor padre 
         this.edad = edad;

     }

     //metodos 
     evolucionar(){
         return console.log(`${this.nombre} está evolucionando.`)
     }
} 

class Electrico extends Pikachu{
    constructor(nombre, tipo, edad, color){
        super(nombre, tipo, edad); 
        this.color = color; 
    }
}

const Electrico1 = new Electrico("Pancho", "Electrico", 4, "Gris"); 
console.log(Electrico1)

const Pikachu1 = new Pikachu("Juan", "Eléctrico", "5 años"); 
console.log(Pikachu1);
Pikachu1.atacar(); 
Pikachu1.evolucionar();

const Pokemon1 = new pokemon("Charmander", "Fuego"); 
Pokemon1.atacar();