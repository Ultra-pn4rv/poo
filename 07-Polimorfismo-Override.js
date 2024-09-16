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