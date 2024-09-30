// Classe abstrata "Personagem"
abstract class Personagem {
    protected String nome;

    // Construtor da classe Personagem
    public Personagem(String nome) {
        this.nome = nome;
    }

    // Métodos abstratos
    public abstract void atacar();
    public abstract void defender();
}

// Classe derivada "Guerreiro"
class Guerreiro extends Personagem {
    private String arma;

    // Construtor da classe Guerreiro
    public Guerreiro(String nome, String arma) {
        super(nome);
        this.arma = arma;
    }

    // Sobrescrita do método atacar da classe abstrata personagem
    @Override
    public void atacar() {
        System.out.println(nome + " ataca com " + arma);
    }

    // Sobrescrita do método defender da classe abstrata personagem
    @Override
    public void defender() {
        System.out.println(nome + " defende-se com um escudo");
    }
}

// Classe derivada "Mago"
class Mago extends Personagem {
    private String magia;

    // Construtor da classe Mago
    public Mago(String nome, String magia) {
        super(nome);
        this.magia = magia;
    }

    // Sobrescrita do método atacar da classe abstrata personagem
    @Override
    public void atacar() {
        System.out.println(nome + " ataca com " + magia);
    }

    // Sobrescrita do método defender da classe abstrata personagem
    @Override
    public void defender() {
        System.out.println(nome + " defende-se com um escudo");
    }
}

// Classe principal
public class Main {
    public static void main(String[] args) {

        // Instanciando objetos de Guerreiro e Mago
        Guerreiro guerreiro = new Guerreiro("Thor", "Lança de dragão");
        guerreiro.atacar();
        guerreiro.defender();

        Mago mago = new Mago("Loki", "Fogo divino");
        mago.atacar();
        mago.defender();
    }
}