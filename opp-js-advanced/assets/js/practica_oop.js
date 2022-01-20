/*
Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0.

*/

class Carro{
    constructor(marca,color,modelo,velocidad,numeroPuertas){
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.numeroPuertas = numeroPuertas;
    }
    acelerar(){
        this.velocidad +=1
    }
    frenar(){
        this.velocidad = 0
    }
    reversa(){
        this.velocidad -=1
    }
    toString(){
        document.write(`El carro ${this.marca}, modelo ${this.modelo} de color ${this.color} que tiene 
        ${this.numeroPuertas} puertas, va a una velocidad de ${this.velocidad} Km/h.<br>`);
    }
}

const Carro1= new Carro('VW','Amarillo','Bocho', '60', '2');

Carro1.toString();
Carro1.frenar();
Carro1.toString();

Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.toString();

Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.reversa();
Carro1.toString();