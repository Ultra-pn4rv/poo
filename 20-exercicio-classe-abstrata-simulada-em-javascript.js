class Personagem {
  #nome;
  #vida;
  #forca;
  #defesa;
  #nivel;
  #experiencia;
  #classe;
  #arma;
  #magia;
  #habilidadeEspecial;

  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    classe,
    arma,
    magia,
    habilidadeEspecial
  ) {
    this.#nome = nome;
    this.#vida = vida;
    this.#forca = forca;
    this.#defesa = defesa;
    this.#nivel = nivel;
    this.#experiencia = experiencia;
    this.#classe = classe;
    this.#arma = arma;
    this.#magia = magia;
    this.#habilidadeEspecial = habilidadeEspecial;
  }

  ganharExperiencia(pontos) {
    this.#experiencia += pontos;
    console.log(`${this.#nome} ganhou ${pontos} pontos de experiência!`);
  }

  atacar() {
    throw new Error("Método 'atacar' deve ser implementado.");
  }

  defender() {
    throw new Error("Método 'defender' deve ser implementado.");
  }

  usarMagia() {
    throw new Error("Método 'usarMagia' deve ser implementado.");
  }

  info() {
    throw new Error("Método 'info' deve ser implementado.");
  }

  atacar(dano = 0) {
    console.log(`${this.#nome} ataca! Dano: ${dano}`);
  }

  defender() {
    console.log("Método 'defender' deve ser implementado.");
  }

  usarMagia() {
    console.log("Método 'usarMagia' deve ser implementado.");
  }

  get nome() {
    return this.#nome;
  }

  get vida() {
    return this.#vida;
  }

  get forca() {
    return this.#forca;
  }

  get defesa() {
    return this.#defesa;
  }

  get nivel() {
    return this.#nivel;
  }

  get classe() {
    return this.#classe;
  }

  get arma() {
    return this.#arma;
  }

  get magia() {
    return this.#magia;
  }

  get habilidadeEspecial() {
    return this.#habilidadeEspecial;
  }

  info() {
    console.log("Método 'info' deve ser implementado.");
  }
}

class Guerreiro extends Personagem {
  #armadura;
  #potenciaAtaque;

  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    arma,
    magia,
    habilidadeEspecial,
    armadura,
    potenciaAtaque
  ) {
    super(
      nome,
      vida,
      forca,
      defesa,
      nivel,
      experiencia,
      "Guerreiro",
      arma,
      magia,
      habilidadeEspecial
    );
    this.#armadura = armadura;
    this.#potenciaAtaque = potenciaAtaque;
  }

  gritarGuerra() {
    console.log(`${this.nome} grita: 'Por honra!'`);
  }

  atacar(dano = 0) {
    const danoTotal = dano + this.#potenciaAtaque;
    console.log(`${this.nome} ataca com sua espada! Dano total: ${danoTotal}`);
  }

  defender() {
    console.log(`${this.nome} se defende usando sua armadura.`);
  }

  usarMagia() {
    console.log(`${this.nome} não pode usar magia.`);
  }

  info() {
    console.log(
      `${this.nome} (Guerreiro) - Vida: ${this.vida}, Força: ${
        this.forca
      }, Defesa: ${this.defesa}, Nível: ${this.nivel}, Armadura: ${
        this.#armadura
      }, Magia: ${this.magia}, Habilidade Especial: ${this.habilidadeEspecial}`
    );
  }
}

class Mago extends Personagem {
  #nivelMagia;
  #elemento;

  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    arma,
    magia,
    habilidadeEspecial,
    nivelMagia,
    elemento
  ) {
    super(
      nome,
      vida,
      forca,
      defesa,
      nivel,
      experiencia,
      "Mago",
      arma,
      magia,
      habilidadeEspecial
    );
    this.#nivelMagia = nivelMagia;
    this.#elemento = elemento;
  }

  invocar() {
    console.log(`${this.nome} invoca um poder elemental de ${this.#elemento}!`);
  }

  atacar() {
    console.log(`${this.nome} lança um feitiço!`);
  }

  defender() {
    console.log(`${this.nome} se protege com um escudo mágico.`);
  }

  usarMagia() {
    console.log(`${this.nome} usa magia de nível ${this.#nivelMagia}!`);
  }

  info() {
    console.log(
      `${this.nome} (Mago) - Vida: ${this.vida}, Força: ${
        this.forca
      }, Defesa: ${this.defesa}, Nível: ${this.nivel}, Magia: ${
        this.#nivelMagia
      }, Elemento: ${this.#elemento}, Habilidade Especial: ${
        this.habilidadeEspecial
      }`
    );
  }
}

class Arqueiro extends Personagem {
  #tipoArco;
  #precisao;

  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    arma,
    magia,
    habilidadeEspecial,
    tipoArco,
    precisao
  ) {
    super(
      nome,
      vida,
      forca,
      defesa,
      nivel,
      experiencia,
      "Arqueiro",
      arma,
      magia,
      habilidadeEspecial
    );
    this.#tipoArco = tipoArco;
    this.#precisao = precisao;
  }

  atirarFlecha() {
    console.log(`${this.nome} atira uma flecha com precisão!`);
  }

  atacar(dano = 0) {
    console.log(`${this.nome} ataca de longe com seu arco! Dano: ${dano}`);
  }

  defender() {
    console.log(`${this.nome} se esconde nas sombras.`);
  }

  usarMagia() {
    console.log(`${this.nome} não usa magia.`);
  }

  info() {
    console.log(
      `${this.nome} (Arqueiro) - Vida: ${this.vida}, Força: ${
        this.forca
      }, Defesa: ${this.defesa}, Nível: ${this.nivel}, Tipo de Arco: ${
        this.#tipoArco
      }, Precisão: ${this.#precisao}, Habilidade Especial: ${
        this.habilidadeEspecial
      }`
    );
  }
}

class Ladino extends Personagem {
  #habilidadeFurtiva;
  #agilidade;

  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    arma,
    magia,
    habilidadeEspecial,
    habilidadeFurtiva,
    agilidade
  ) {
    super(
      nome,
      vida,
      forca,
      defesa,
      nivel,
      experiencia,
      "Ladino",
      arma,
      magia,
      habilidadeEspecial
    );
    this.#habilidadeFurtiva = habilidadeFurtiva;
    this.#agilidade = agilidade;
  }

  desaparecer() {
    console.log(`${this.nome} desaparece nas sombras!`);
  }

  atacar(dano = 0) {
    console.log(`${this.nome} faz um ataque furtivo! Dano: ${dano}`);
  }

  defender() {
    console.log(`${this.nome} se esquiva rapidamente.`);
  }

  usarMagia() {
    console.log(`${this.nome} não usa magia.`);
  }

  info() {
    console.log(
      `${this.nome} (Ladino) - Vida: ${this.vida}, Força: ${
        this.forca
      }, Defesa: ${this.defesa}, Nível: ${this.nivel}, Agilidade: ${
        this.#agilidade
      }, Habilidade Furtiva: ${this.#habilidadeFurtiva}, Habilidade Especial: ${
        this.habilidadeEspecial
      }`
    );
  }
}

// teste
const guerreiro = new Guerreiro(
  "Thor",
  100,
  20,
  15,
  1,
  0,
  "Espada",
  "Nenhuma",
  "Golpe Fatal",
  "Cota de Malha",
  30
);
const mago = new Mago(
  "Merlin",
  80,
  5,
  10,
  1,
  0,
  "Bastão",
  "Fogo",
  "Chamas do Inferno",
  5,
  "Fogo"
);
const arqueiro = new Arqueiro(
  "Legolas",
  90,
  10,
  12,
  1,
  0,
  "Arco Longo",
  "Nenhuma",
  "Flecha de Fogo",
  "Longo",
  95
);
const ladino = new Ladino(
  "Ezio",
  85,
  12,
  10,
  1,
  0,
  "Adaga",
  "Nenhuma",
  "Ataque Furtivo",
  "Desaparecer",
  20
);

guerreiro.info();
mago.usarMagia();
arqueiro.atirarFlecha();
ladino.desaparecer();
guerreiro.atacar(10);
ladino.atacar(15);

guerreiro.ganharExperiencia(50);
mago.ganharExperiencia(30);
arqueiro.ganharExperiencia(20);
ladino.ganharExperiencia(40);