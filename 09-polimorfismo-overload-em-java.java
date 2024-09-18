class Personagem {
    // atributos
    private String nome;
    private int vida;
    //método construtor da classe Personagem
    public Personagem(String nome, int vida) {
        this.nome = nome;
        this.vida = vida;
    }
    //sobrecarga do método atacar
    public void atacar() {
        System.out.println(nome + " realiza um ataque básico!");
    }
    public void atacar(String arma) {
        System.out.println(nome + " ataca com a arma: " + arma);
    }
    public void atacar(String tipoFlecha, boolean comArco) {
        if (comArco) {
            System.out.println(nome + " ataca com a flecha " + tipoFlecha + " e utiliza o arco!");
        } else {
            System.out.println(nome + " ataca com a flecha " + tipoFlecha + "!");
    }
}
public void receberDano(int dano) {
    vida -= dano;
    System.out.println(nome + " recebeu " + dano + " de dano!");
    }
}