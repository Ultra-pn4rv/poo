class CallOfDuty {
  constructor(
    nome,
    vida,
    forca,
    agilidade,
    arma,
    precisao,
    distancia,
    velocidade,
    vitalidade,
    colete
  ) {
    this.nome = nome;
    this.vida = vida;
    this.forca = forca;
    this.agilidade = agilidade;
    this.arma = arma;
    this.precisao = precisao;
    this.distancia = distancia;
    this.velocidade = velocidade;
    this.vitalidade = vitalidade;
    this.colete = colete;
  }

  atirar(...param) {
    if (param.length === 0) {
      console.log(`${this.nome} matou um inimigo no soco`);
    } else if (args.length === 1) {
      const arma = args[0];
      console.log(
        `${this.nome} matou um inimigo com ${arma} a ${this.distancia} de distancia!`
      );
    } else {
      console.log("Método de ataque inválido!");
    }
  }
  danoSofrido(dano) {
    this.vida -= dano;
    console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
  }
}

class Ghost extends CallOfDuty {
  constructor(
    nome,
    vida,
    forca,
    agilidade,
    arma,
    precisao,
    distancia,
    velocidade,
    vitalidade,
    colete,
    inteligencia,
    movimento
  ) {
    super(
      nome,
      vida,
      forca,
      agilidade,
      arma,
      precisao,
      distancia,
      velocidade,
      vitalidade,
      colete
    );
    this.movimento = movimento;
    this.inteligencia = inteligencia;
  }
  usarArma() {
    console.log(
      `${this.nome} usa a arma ${this.arma} para derrotar um inimigo`
    );
  }

  mostrarDetalhes() {
    console.log(
      `Nome: ${this.nome}, Colete: ${this.colete}, Força: ${this.forca}, Agilidade: ${this.agilidade}, Vida: ${this.vida}, Arma: ${this.arma}, Precisão: ${this.precisao}`
    );
  }
}

class Konig extends CallOfDuty {
  constructor(
    nome,
    vida,
    forca,
    agilidade,
    arma,
    precisao,
    distancia,
    velocidade,
    vitalidade,
    colete,
    batata,
    beterraba
  ) {
    super(
      nome,
      vida,
      forca,
      agilidade,
      arma,
      precisao,
      distancia,
      velocidade,
      vitalidade,
      colete
    );
    this.batata = batata;
    this.beterraba = beterraba;
  }
  usarArma() {
    console.log(`${this.nome} usa a arma ${this.arma} para derrotar um inimigo`);
  }

  mostrarDetalhes() {
    console.log(
      `Nome: ${this.nome}, Colete: ${this.colete}, Força: ${this.forca}, Agilidade: ${this.agilidade}, Vida: ${this.vida}, Arma: ${this.arma}, Precisão: ${this.precisao}`
    );
  }
}

const ghost = new Ghost(
  "Ghost",
  100,
  95,
  80,
  "Pistola",
  67
);
const konig = new Konig("Konig", 100, 70, 90, 80, "AWP", 90);

console.log("--- Ghost ---");
ghost.usarArma();
ghost.atirar();
ghost.danoSofrido();
ghost.mostrarDetalhes();

console.log("--- Konig ---");
ghost.usarArma();
ghost.atirar();
ghost.danoSofrido();
ghost.mostrarDetalhes();