class Animal {
    constructor(nome) {
    if (new.target === Animal) {
        throw new Error("A classe Animal não pode ser instanciada diretamente.");
    }
    this.nome = nome;
    }

    emitirSom() {
    throw new Error("O método emitirSom() deve ser implementado pelas subclasses.");
    }
}

class Cachorro extends Animal {
    emitirSom() {
    console.log(`${this.nome} diz: Au au!`);
    }
}

class Gato extends Animal {
    emitirSom() {
    console.log(`${this.nome} diz: Miau!`);
    }
}

const cachorro1 = new Cachorro("Rex");
const gato1 = new Gato("Mimi");
const cachorro2 = new Cachorro("Thor");

cachorro1.emitirSom();  
gato1.emitirSom();      
cachorro2.emitirSom();  