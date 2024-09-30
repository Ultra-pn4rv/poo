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