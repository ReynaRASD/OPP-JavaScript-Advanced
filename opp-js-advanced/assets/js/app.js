// Clases, molde que nos permite crear objetos

class Animal{
    //nombre;
    //especie;
    //Contructor es una funcion
    constructor(nombre, especie){
        
        //console.log('Este es un constructor');
        
        // this hace referencia al contexto en que se esta utilizando
        this.nombre = nombre;
        this.especie = especie;
    }

    //getters y setters
    get getNombre(){
        return this.nombre;
    } 


    set setNombre(nombre){
        this.nombre = nombre;
    }


    get getEspecie(){
        return this.especie;
    }

    set setEspecie(especie){
        this.especie = especie;
    }

    //metodos == funcion
    presentarse(){
        document.write(`<br> Hola, soy un ${this.especie} y me llamo ${this.nombre} <br>`);
    }

    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `<br> Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`;
        return mensaje;
    }

    //Metodos estaticos
    // Pertenece solo a la clase pero no se hereada a los objetos
    static saludar(){
        return console.log('Hola, soy un metodo estatico');
    }

}



//Heredando los atributos y los metodos de la clase que estan utlizando 

const Animal1 = new Animal("Scooby", "Perro"); //Esto es un objeto apartir de la clase anterior.
console.log(Animal1);

const Animal2 = new Animal("Pecas", "Gato");
console.log(Animal2);

const Animal3 = new Animal("Stuart", "Raton");
console.log(Animal3);


Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();


console.log(Animal1.nombre);
Animal1.nombre = "Scrappy";  //notacion para cambiar el valor
console.log(Animal1.nombre);
console.log(Animal1);

document.write(Animal1.cambiarNombre('Hunter')); //metodo para cambiar el valor



//    Getters y Setters
//  get = obtener el valor de una variable
//  set = fijar o cambiar el valor de un Atributo
//  Se utiliza como si fueran atributos, usando un igual.


console.log(Animal1.getNombre);
Animal1.setNombre = 'Pikachu';
console.log(Animal1.getNombre);
console.log(Animal1);



/* 
function constructor(){
}
*/