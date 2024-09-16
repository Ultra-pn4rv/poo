// Classe base Personagem
class Personagem {
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
}

atacar() {
    console.log(`${this.nome} atacou!`);
}

receberDano(dano) {
    this.vida -= dano;
    console.log(`${this.nome} recebeu ${dano} de dano. Vida: ${this.vida}`);
    }
}

// Classe derivada Guerreiro
class Guerreiro extends Personagem {
    constructor(nome, vida, arma) {
        super(nome, vida);
        this.arma = arma;
    }

    atacar() {
        console.log(`${this.nome} atacou com ${this.arma}`);
    }
}

// Classe derivada Mago
class Mago extends Personagem {
    constructor(nome, vida, magia) {
        super(nome, vida);
        this.magia = magia;
    }

    atacar() {
        console.log(`${this.nome} atacou com ${this.magia}`);
    }
}

// Classe derivada Arqueiro
class Arqueiro extends Personagem {
    constructor(nome, vida, tipoFlecha) {
        super(nome, vida);
        this.tipoFlecha = tipoFlecha;
    }

    atacar() {
        console.log(`${this.nome} atacou com ${this.tipoFlecha}`);
    }
}