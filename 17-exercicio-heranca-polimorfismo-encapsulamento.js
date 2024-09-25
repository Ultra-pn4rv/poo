class DeathNote {
  constructor(
    nome,
    idade,
    ocupacao,
    inteligencia,
    moralidade,
    habilidade,
    nacionalidade,
    historia,
    aliados = [],
    inimigos = []
  ) {
    this.#nome = nome;
    this.#idade = idade;
    this.#ocupacao = ocupacao;
    this.#inteligencia = inteligencia;
    this.#moralidade = moralidade;
    this.#habilidade = habilidade;
    this.#nacionalidade = nacionalidade;
    this.#historia = historia;
    this.#aliados = aliados;
    this.#inimigos = inimigos;
  }

  // encapsulamento
  #nome;
  #idade;
  #ocupacao;
  #inteligencia;
  #moralidade;
  #habilidade;
  #nacionalidade;
  #historia;
  #aliados;
  #inimigos;

  // getters
  get nome() {
    return this.#nome;
  }
  get idade() {
    return this.#idade;
  }
  get ocupacao() {
    return this.#ocupacao;
  }
  get inteligencia() {
    return this.#inteligencia;
  }
  get moralidade() {
    return this.#moralidade;
  }
  get habilidade() {
    return this.#habilidade;
  }
  get nacionalidade() {
    return this.#nacionalidade;
  }
  get historia() {
    return this.#historia;
  }
  get aliados() {
    return this.#aliados;
  }
  get inimigos() {
    return this.#inimigos;
  }
  // setters
  set nome(novoNome) {
    this.#nome = novoNome;
  }
  set idade(novaIdade) {
    this.#idade = novaIdade;
  }
  set ocupacao(novaOcupacao) {
    this.#ocupacao = novaOcupacao;
  }
  set inteligencia(novaInteligencia) {
    this.#inteligencia = novaInteligencia;
  }
  set moralidade(novaMoralidade) {
    this.#moralidade = novaMoralidade;
  }
  set habilidade(novaHabilidade) {
    this.#habilidade = novaHabilidade;
  }
  set nacionalidade(novaNacionalidade) {
    this.#nacionalidade = novaNacionalidade;
  }
  set historia(novaHistoria) {
    this.#historia = novaHistoria;
  }
  set aliados(novosAliados) {
    this.#aliados = novosAliados;
  }
  set inimigos(novosInimigos) {
    this.#inimigos = novosInimigos;
  }

  adicionarAliado(aliado) {
    this.#aliados.push(aliado);
  }
  adicionarInimigo(inimigo) {
    this.#inimigos.push(inimigo);
  }
  exibirResumo() {
    console.log(
      `${this.nome} - Ocupação: ${this.ocupacao} - Idade: ${this.idade}`
    );
  }

  exibirDetalhes() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Ocupação: ${this.ocupacao}`);
    console.log(`Inteligência: ${this.inteligencia}`);
    console.log(`Moralidade: ${this.moralidade}`);
    console.log(`Habilidade: ${this.habilidade}`);
    console.log(`Nacionalidade: ${this.nacionalidade}`);
    console.log(`História: ${this.historia}`);
    console.log(`Aliados: ${this.aliados.join(", ")}`);
    console.log(`Inimigos: ${this.inimigos.join(", ")}`);
  }
}

// classes derivadas
class LightYagami extends DeathNote {
    constructor() {
        super("Light Yagami", 17, "Estudante", 95, "Baixa", "Estratégia", "Japão", "Encontra um caderno que pode matar.");
        this.#objetivo = "Eliminar criminosos";
        this.#caderno = "Death Note";
    }

    #objetivo;
    #caderno;

    usarCaderno() {
        console.log(`${this.nome} usa o ${this.#caderno} para ${this.#objetivo}.`);
    }

    exibirResumo() {
        super.exibirResumo();
        console.log(`Objetivo: ${this.#objetivo}`);
    }
}

class L extends DeathNote {
    constructor() {
        super("L", 25, "Detetive", 99, "Alta", "Dedução", "Japão", "Melhor detetive do mundo.");
        this.#metodo = "Raciocínio lógico";
        this.#alvo = "Kira";
    }

    #metodo;
    #alvo;

    investigar() {
        console.log(`${this.nome} investiga usando ${this.#metodo} para capturar ${this.#alvo}.`);
    }

    exibirResumo() {
        super.exibirResumo();
        console.log(`Método: ${this.#metodo}`);
    }
}

class MisaAmane extends DeathNote {
    constructor() {
        super("Misa Amane", 19, "Idol", 80, "Moderada", "Manipulação", "Japão", "Adora Light Yagami.");
        this.#lealdade = "Light Yagami";
        this.#caderno = "Death Note";
    }

    #lealdade;
    #caderno;

    mostrarLealdade() {
        console.log(`${this.nome} é leal a ${this.#lealdade}.`);
    }

    exibirResumo() {
        super.exibirResumo();
        console.log(`Lealdade: ${this.#lealdade}`);
    }
}

class Near extends DeathNote {
    constructor() {
        super("Near", 20, "Detetive", 95, "Alta", "Estratégia", "Japão", "Herança de L.");
        this.#tatico = "Planejamento";
        this.#aliados = "Equipe de Investigação";
    }

    #tatico;
    #aliados;

    fazerPlano() {
        console.log(`${this.nome} usa ${this.#tatico} com a ${this.#aliados}.`);
    }

    exibirResumo() {
        super.exibirResumo();
        console.log(`Tática: ${this.#tatico}`);
    }
}

const light = new LightYagami();
const l = new L();
const misa = new MisaAmane();
const near = new Near();

light.exibirResumo();
light.usarCaderno();
console.log('---');
l.exibirResumo();
l.investigar();
console.log('---');
misa.exibirResumo();
misa.mostrarLealdade();
console.log('---');
near.exibirResumo();
near.fazerPlano();

light.nome = "Kira";
light.idade = 18;
l.nome = "L Lawliet";
misa.lealdade = "Kira";

console.log('--- Após modificações ---');
light.exibirResumo();
l.exibirResumo();
misa.exibirResumo();