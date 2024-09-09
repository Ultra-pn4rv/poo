class Pessoa {
  constructor(nome, idade) {
    // atributos
    //inicialização dos atributos
    this.nome = nome;
    this.idade = idade;
  }
  falar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
