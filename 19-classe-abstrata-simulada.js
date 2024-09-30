// Classe base "Personagem" simulando uma classe abstrata
class Personagem {
    constructor(nome) {
    if (new.target === Personagem) {
        throw new Error("Não é possivel instanciar a classr abstrata Personagem diretamente.");
    }
    this.nome= nome;
    }

// Método abstrato simulado
atacar() {
    throw new Error("Método atacar() deve ser implementado pela classe derivada.");
}

// Método abstrato simulado
defender() {
    throw new Error("Método defender() deve ser implementado pela classe derivada.");
    }
}
// Classe derivada - Guerreiro
class Guerreiro extends Personagem {
    constructor(nome, arma) {
        super(nome);
        this.arma = arma;
    }

// Implementação dos métods abstratos da classe Personagem
atacar() {
    console.log(`${this.nome} ataca com a ${this.arma}`);
}

defender() {
    console.log(`${this.nome} defende com resistência física.`);
    }
}

// Classe derivada - Mago
class Mago extends Personagem {
    constructor(nome, magia) {
        super(nome);
        this.magia = magia;
    }

// Implementação dos métods abstratos da classe Personagem
atacar() {
    console.log(`${this.nome} lança a magia ${this.magia}`);
}

defender() {
    console.log(`${this.nome} usa um escudo mágico para se defender`);
    }
}

// Criando instancias e testando o comportamento
try {
    const personagem = new Personagem("Invalido");
} catch (error) {
    console.log(error,message);
}

const guerreiro = new Guerreiro("Gandalf", "Espada de Lâmina");
guerreiro.atacar();
guerreiro.defender();

const mago = new Mago("Saruman", "Chama de Fogo");
mago.atacar();
mago.defender();