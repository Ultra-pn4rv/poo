class Personagem {
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }
    // simulação de sobrecarga
    atacar(...args) {
        if (args.length === 0) {
            console.log(`${this.nome} realiza um ataque básico!`);
        } else if (args.length === 1) {
            const arma = args[0];
            console.log(`${this.nome} ataca com ${arma}!`);
    } else if (args.length === 2) {
        const [tipoFlecha, comArco] = args;
        if (comArco) {
            console.log(`${this.nome} ataca com ${tipoFlecha} e usa arco!`);
        } else {
            console.log(`${this.nome} ataca com ${tipoFlecha}!`);
        }
        } else {
            console.log('Método de ataque inválido!');
        }
    }
receberDano(dano) {
    this.vida -= dano;
    console.log(`${this.nome} recebeu ${dano} de dano. Vida: ${this.vida}`);
    }
}