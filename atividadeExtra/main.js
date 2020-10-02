let jogador1 = {
    cerebro: {
        selecao: undefined,
        escolha: ['Pedra', 'Tesoura', 'Papel'],
        //Zero == pedra, 1 == tesoura e 2 == papel
        pensarSelecao: function () {
            this.selecao = Math.floor(Math.random() * 3);
        },
        mostrarEscolha: function () {
            document.querySelector('#opt-player-1').textContent = this.escolha[this.selecao];
        }
    }
}

let jogador2 = {
    cerebro: {
        selecao: undefined,
        escolha: ['Pedra', 'Tesoura', 'Papel'],
        //Zero == pedra, 1 == tesoura e 2 == papel
        pensarSelecao: function () {
            this.selecao = Math.floor(Math.random() * 3);
        },
        mostrarEscolha: function () {
            document.querySelector('#opt-player-2').textContent = this.escolha[this.selecao];
        }
    }
}

let jogo = {
    jogadores: [jogador1, jogador2],
    compararEscolha: function () {
        switch (this.jogadores[0].cerebro.escolha[this.jogadores[0].cerebro.selecao]) {

            case 'Pedra':
                if (this.jogadores[1].cerebro.escolha[this.jogadores[1].cerebro.selecao] == 'Tesoura') {
                    document.querySelector('#legenda').textContent = 'jogador1 venceu';
                }
                else if (this.jogadores[1].cerebro.escolha[this.jogadores[1].cerebro.selecao] == 'Papel') {
                    document.querySelector('#legenda').textContent = 'jogador2 venceu';
                } else {
                    document.querySelector('#legenda').textContent = 'Empate';
                }
                break;

            case 'Tesoura':
                if (this.jogadores[1].cerebro.escolha[this.jogadores[1].cerebro.selecao] == 'Papel') {
                    document.querySelector('#legenda').textContent = 'jogador1 venceu';
                }
                else if (this.jogadores[1].cerebro.escolha[this.jogadores[1].cerebro.selecao] == 'Pedra') {
                    document.querySelector('#legenda').textContent = 'jogador2 venceu';
                } else {
                    document.querySelector('#legenda').textContent = 'Empate';
                }
                break;

            case 'Papel':
                if (this.jogadores[1].cerebro.escolha[this.jogadores[1].cerebro.selecao] == 'Pedra') {
                    document.querySelector('#legenda').textContent = 'jogador1 venceu';
                }
                else if (this.jogadores[1].cerebro.escolha[this.jogadores[1].cerebro.selecao] == 'Tesoura') {
                    document.querySelector('#legenda').textContent = 'jogador2 venceu';
                } else {
                    document.querySelector('#legenda').textContent = 'Empate';
                }
                break;
        }
    },
    jogar: function () {
        //jogar consiste em pensar na seleção
        //mostrar na tela
        //comparar
        this.jogadores[0].cerebro.pensarSelecao();
        this.jogadores[1].cerebro.pensarSelecao();

        this.jogadores[0].cerebro.mostrarEscolha();
        this.jogadores[1].cerebro.mostrarEscolha();

        this.compararEscolha();

    }
}



