class Pessoa {
  constructor(nome, idade, peso, altura) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }
  mostrarDados() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Peso: ${this.peso}, Altura: ${this.altura}`);
  }
}

class Estudante extends Pessoa {
  constructor(nome, idade, peso, altura, curso) {
    super(nome, idade, peso, altura);
    this.curso = curso;
  }
  mostrarCurso() {
    console.log(`Curso: ${this.curso}`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, peso, altura, salario) {
    super(nome, idade, peso, altura);
    this.salario = salario;
  }
  mostrarSalario() {
    console.log(`Salário: ${this.salario}`);
  }
}

class Diretor extends Funcionario {
  constructor(nome, idade, peso, altura, salario) {
    super(nome, idade, peso, altura, salario);
  }

}

class Professor extends Funcionario {
  constructor(nome, idade, peso, altura, salario) {
    super(nome, idade, peso, altura, salario);
  }
}

const aluno = new Estudante("Felipe", 18, 60, 1.80, "Programação de Jogos Digitais");
aluno.mostrarDados();
aluno.mostrarCurso();

const diretor = new Diretor("Juliano", 45, 65, 1.65, 15000);
diretor.mostrarDados();
diretor.mostrarSalario();

const professor = new Professor("Wanderson", 40, 70, 1.65, 12000);
professor.mostrarDados();
professor.mostrarSalario();