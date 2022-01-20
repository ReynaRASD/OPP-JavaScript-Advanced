class Animalito{
    constructor(nombre, edad, especie, revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.revisado = revisado;
        this.enfermo = false;
    }
    saludar(){
        return console.log(`Mi nombre es ${this.nombre}`);
    }
}

class Veterinario {
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }
    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes +=1;
        let mensaje = `Paciente agregado <br>`
        return document.write(mensaje);
    }

    modificarPacientesRevisados(){
        this.pacientesRevisados++;

    }

    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.modificarPacientesRevisados();
            //this.pacientesRevisados++;
            //esto se sustituye con la llamada de arriba
            document.write(`<br>Paciente ha sido revisado.`);
        }else{
            document.write(`<br>Este paciente ya fue revisado.`);
        }
    }

    mostrarLista(){
        for(let i=0; i < this.listaPacientes.length; i++ ){
            document.write(" " + this.listaPacientes[i].nombre);
        }
        document.write(`<br>Cantidad de pacientes: ${this.cantidadPacientes} <br> Pacientes revisados: ${this.pacientesRevisados}`);
    }
}

const VeterinariaPanchito = new Veterinario();

//objetos creados de la clase Animalito
const Animalito1 = new Animalito('Manchas', 5, 'Perro', false); //objeto1
const Animalito2 = new Animalito('Galleta', 2, 'Gato', true); //objeto2

console.log(Animalito1);
console.log(Animalito2);

VeterinariaPanchito.agregarPaciente(Animalito1);
VeterinariaPanchito.agregarPaciente(Animalito2);

console.log(VeterinariaPanchito.listaPacientes);

VeterinariaPanchito.mostrarLista();
VeterinariaPanchito.revisarPaciente(Animalito1);
VeterinariaPanchito.mostrarLista();

VeterinariaPanchito.revisarPaciente(Animalito2);