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