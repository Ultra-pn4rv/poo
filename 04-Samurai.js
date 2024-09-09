class Samurai {
  constructor(nome, level, karma, forca, agilidade, aura) {
    this.nome = nome;
    this.level = level;
    this.karma = karma;
    this.forca = forca;
    this.agilidade = agilidade;
    this.aura = aura;

  }
  falar() {
    console.log(`O nome deste personagem é ${this.nome}, seu level é ${this.level}`);
  }
  informar() {
    console.log(`Sua força é ${this.forca} e sua agilidade é ${this.agilidade}`);
  }
  cogitarKarma() {
    console.log(`Seu karma é ${this.karma}`);
  }
  dizerAura() {
    console.log(`Sua aura é ${this.aura}`);
  }
}

// Criando objetos do tipo Samurai
  const player1 = new Samurai("Otogi", 130, 400, 20, 45, 2654);
  player1.falar();
  player1.informar();
  player1.cogitarKarma();
  player1.dizerAura();

  const player2 = new Samurai("Kenshin", 240, 500, 22, 50, 1563);
  player2.falar();
  player2.informar();
  player2.cogitarKarma();
  player2.dizerAura();