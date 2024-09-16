// Classe base Personagem
class Personagem {
    constructor(nome, classe, forca, agilidade, vida) {
        this.nome = nome;
        this.classe = classe;
        this.forca = forca;
        this.agilidade = agilidade;
        this.vida = vida;
    }

    atacar(alvo) {
        console.log(`${this.nome} ataca ${alvo} com força de ${this.forca}!`);
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log(`${this.nome} recebeu ${dano} de dano. Vida: ${this.vida}`);
    }
}

// Classe derivada Guts
class Guts extends Personagem {
    constructor(nome, classe, forca, agilidade, vida, arma, marca) {
        super(nome, classe, forca, agilidade, vida);
        this.arma = arma;
        this.marca = marca;
    }

    usarArma() {
        console.log(`${this.nome} usa a arma ${this.arma} com grande habilidade.`);
    }

    mostrarDetalhes() {
        console.log(`Guts: ${this.nome}, Classe: ${this.classe}, Força: ${this.forca}, Agilidade: ${this.agilidade}, Vida: ${this.vida}, Arma: ${this.arma}, Marca: ${this.marca}`);
    }
}

// Classe derivada Griffith
class Griffith extends Personagem {
    constructor(nome, classe, forca, agilidade, vida, carisma, poderDeLideranca) {
        super(nome, classe, forca, agilidade, vida);
        this.carisma = carisma;
        this.poderDeLideranca = poderDeLideranca;
    }

    inspirar() {
        console.log(`${this.nome} inspira seus seguidores com seu carisma de ${this.carisma}.`);
    }

    mostrarDetalhes() {
        console.log(`Griffith: ${this.nome}, Classe: ${this.classe}, Força: ${this.forca}, Agilidade: ${this.agilidade}, Vida: ${this.vida}, Carisma: ${this.carisma}, Poder de Liderança: ${this.poderDeLideranca}`);
    }
}

const guts = new Guts('Guts', 'Espadachim', 95, 80, 100, 'Dragonslayer', 'Marca do Sacrifício');
const griffith = new Griffith('Griffith', 'Líder', 70, 90, 80, 100, 90);

console.log('--- Guts ---');
guts.atacar('Inimigo A');
guts.usarArma();
guts.receberDano(30);
guts.mostrarDetalhes();

console.log('--- Griffith ---');
griffith.atacar('Inimigo B');
griffith.inspirar();
griffith.receberDano(20);
griffith.mostrarDetalhes();