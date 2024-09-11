class Pessoa {
    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, peso, altura, curso) {
        super(nome, idade, peso, altura);
        this.curso = curso;
    }
}

class Funcionario extends Pessoa {
    constructor(nome, idade, peso, altura, salario) {
        super(nome, idade, peso, altura);
        this.salario = salario
    }
}

class Diretor extends Funcionario {
    constructor(nome, idade, peso, altura, salario,) {
        super(nome, idade, peso, altura, salario);
    }
}

class Professor extends Funcionario {
    constructor(nome, idade, peso, altura, salario) {
        super(nome, idade, peso, altura, salario);
    }
}

// Criando objetos aluno, diretor e professor
const aluno = new Estudante("Felipe", 18, 1.80, 60, "Programação de Jogos Digitais");
const diretor = new Diretor("Juliano", 45, 1.65, 65, 3000);
const professor = new Professor("Wanderson", 40, 1.65, 70, 1000);

// Mostrando no console a saída 
console.log(aluno);
console.log(diretor);
console.log(professor);