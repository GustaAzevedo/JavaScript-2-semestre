let Jogador = function (name) {
    nome: name;
    cerebro: {
        jogada: undefined;
        escolha: ['Pedra', 'Tesoura', 'Papel'];
        //Zero == pedra, 1 == tesoura e 2 == papel
    }
}

let jogador1 = new Jogador('Gustavo');
let jogador2 = new Jogador('Carlo');

Jogador.prototype.pensarSelecao = function () {
    this.jogada = Math.floor(Math.random() * 3);
}

Jogador.prototype.mostrarEscolha = function () {
    document.querySelector('#jogador1').textContent = Jogador.escolha[this.jogada];
}

let Jogar = function () {
    num = jogador1.prototype.pensarSelecao();

    document.querySelector('#pontos').textContent = this.num;
}
