// Classe base Personagem
class Personagem {
  // Encapsulando os atributos com #, tornando-os privados.
  #nome;
  #classe;
  #nivel;
  #vida;
  #mana;

  // Método Contrutor
  constructor(nome, classe, nivel, vida, mana) {
    this.#nome = nome;
    this.#classe = classe;
    this.#nivel = nivel;
    this.#vida = vida;
    this.#mana = mana;
  }
  // Métodos Getters e Setters
  // Métodos Getter e Setter para o atributo nome
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  // Métodos Getters e Setter para o atributo classe
  get classe() {
    return this.#classe;
  }
  set classe(classe) {
    this.#classe = classe;
  }
  // Métodos Getters e Setter para o atributo nivel
  get nivel() {
    return this.#nivel;
  }
  set nivel(nivel) {
    this.#nivel = nivel;
  }
  // Métodos Getters e Setter para o atributo vida
  get vida() {
    return this.#vida;
  }
  set vida(vida) {
    this.#vida = vida;
  }
  // Métodos Getters e Setters para o atributo mana
  get mana() {
    return this.#mana;
  }
  set mana(mana) {
    this.#mana = mana;
  }

  // Métodos
  // Simulando sobrecarga com rest parameter
  atacar(...args) {
      if (args.length === 0) {
          console.log(`{$this.#nome} realizou um ataque normal!`);
        } else if (args.length === 1) {
            console.log(`${this.#nome} atacou com um poder de ${args[0]}!`);
        } else if (args.length === 2) {
            console.log(`${this.#nome} usou ${args[1]} e atacou com ${args[0]} de poder!`);
        } else {
            console.log("Número inválido de argumentos.");
        }
    }
    defesa() {
        console.log(`${this.#nome} defendeu com ${this.#nivel * 2} pontos de defesa!`);
    }
    
    receberDano(dano) {
        this.#vida -= dano;
        console.log(`${this.#nome} recebeu ${dano} de dano! Vida restante: ${this.#vida}`);
    }
}

// Classe derivada - Assassino
class Assassino extends Personagem {
  constructor(nome, nivel, vida, mana, furtividade) {
    super(nome, "Assassino", nivel, vida, mana);
    this.furtividade = furtividade;
  }

  // Sobrescrevendo o Método atacar
  atacar() {
    console.log(`${this.nome} ataca silenciosamente com dano adicional pela furtividade!`);
  }

  // Método específico
  usarFurtividade() {
    console.log(`${this.nome} usa sua furtividade de nível ${this.furtividade} para se esconder!`)
  }
}

// Classe derivada - Paladino
class Paladino extends Personagem {
  constructor(nome, nivel, vida, mana, fe) {
    super(nome, "Paladino", nivel, vida, mana);
    this.fe = fe; // Atributo específico
  }

  defesa() {
    console.log(
      `${this.nome} se defendeu com o escudo sagrado, absorvendo mais dano com base na fé ${this.fe}`
    );
  }

  curar() {
    console.log(`${this.nome} usa sua fé para curar a si mesmo ou aliados!`);
  }
}

// Classe derivada - Mecanico
    class Mecanico extends Personagem {
        constructor(nome, nivel, vida, mana, engenharia) {
            super(nome, "Mecânico", nivel, vida, mana);
            this.engenharia = engenharia; // Atributo específico
        }
        
        // Sobrescrevendo o método atacar
        receberDanoe(dano) {
            const danoReduzido = dano - this.engenharia;
            super.receberDano(danoReduzido);
            console.log(`${this.nome} usou sua engenharia para reduzir o dano em ${this.engenharia} .`);
        }
        
        // Método específico
        construirTorre() {
            console.log(`${this.nome} construiu uma torre defensiva!`);
        }
    }

// Criando instância da classe derivada Assassino
const assassino = new Assassino("Luna Sombra", 10, 100, 50, 8);
// Chamando os métodos
assassino.atacar(); // Método sobrescrito
assassino.usarFurtividade(); // Método específico

// Criando instância da classe derivada Paladino
const paladino = new Paladino("Sir Lancelot", 12, 120, 70, 15);
// Chamando os métodos
paladino.defesa(); // Método sobrescrito
paladino.curar(); // Método específico

// Criando instância da classe derivada Mecanico
const mecanico = new Mecanico("Roberto das Engrenagens", 8, 90, 40, 5);
// Chamando os métodos
mecanico.receberDano(30); // Método sobrescrito
mecanico.construirTorre(); // Método específico