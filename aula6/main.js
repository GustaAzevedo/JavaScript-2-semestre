/*
function rodaDado() {
    let ladoDado = Math.floor(Math.random() * 6) + 1;
    document.querySelector('#ladoDado').textContent = ladoDado;
}
*/


let dado = {
    valor: null,
    jogando: function () {
        this.valor = Math.floor(Math.random() * 6) + 1;
        this.imprimeValor();
    },
    imprimeValor: function () {
        document.querySelector('#ladoDado').textContent = this.valor;
    }
};

let player1 = {
    nome: 'Player 1',
    id: 1,
    pontos: 0,
    pontosTemporarios: 0,
    jogaDado: function () {
        dado.jogando();
        pig.verificaValorDado();
    },
    parar: function () {
        //adiciona em pontos os postos temporarios
        //passa para o próximo jogador
        this.adicionaNosPontos();
        pig.proximoJogador();
        pig.finaliza(player1.pontos, player1.nome);
    },
    adicionaNosPontos: function () {
        this.pontos += this.pontosTemporarios;
        this.imprimePontos();
    },
    adicionaNoPontoTemporario: function (pontos) {
        this.pontosTemporarios += pontos;
        this.imprimePontosTemporarios();
    },
    zeraPontoTemporario: function () {
        this.pontosTemporarios = 0;
        this.imprimePontosTemporarios();
    },
    imprimePontosTemporarios: function () {
        document.querySelector('#pontosTemporariosPlayer-' + this.id).textContent = this.pontosTemporarios;
    },
    imprimePontos: function () {
        document.querySelector('#pontosPlayer-' + this.id).textContent = this.pontos;
    }

}

let player2 = {
    nome: 'Player 2',
    id: 2,
    pontos: 0,
    pontosTemporarios: 0,
    jogaDado: function () {
        dado.jogando();
        pig.verificaValorDado();
    },
    parar: function () {
        //adiciona em pontos os postos temporarios
        //passa para o próximo jogador
        this.adicionaNosPontos();
        pig.proximoJogador();
        pig.finaliza(player2.pontos, player2.nome);
    },
    adicionaNoPontoTemporario: function (pontos) {
        this.pontosTemporarios += pontos;
        this.imprimePontosTemporarios();
    },
    adicionaNosPontos: function () {
        this.pontos += this.pontosTemporarios;
        this.imprimePontos();
    },
    zeraPontoTemporario: function () {
        this.pontosTemporarios = 0;
        this.imprimePontosTemporarios();
    },
    imprimePontosTemporarios: function () {
        document.querySelector('#pontosTemporariosPlayer-' + this.id).textContent = this.pontosTemporarios;
    },
    imprimePontos: function () {
        document.querySelector('#pontosPlayer-' + this.id).textContent = this.pontos;
    }


}

let pig = {
    jogadores: [player1, player2],
    jogadorAtual: 0,
    PlayerAtual: function () {
        //RETORNA QUEM É O PLAYER ATUAL
        return this.jogadores[this.jogadorAtual];
    },
    proximoJogador: function () {
        //ZERAR OS PONTOS TEMPORÁRIOS
        this.PlayerAtual().zeraPontoTemporario();

        //ALTERO PARA O PROXIMO PLAYER
        this.jogadorAtual++;
        if (this.jogadorAtual == this.jogadores.length) {
            this.jogadorAtual = 0;
        }
        document.querySelector('#jogadorAtual').textContent = this.PlayerAtual().nome;
    },
    verificaValorDado: function () {
        if (dado.valor == 1) {
            this.proximoJogador();
        }
        else {
            this.PlayerAtual().adicionaNoPontoTemporario(dado.valor);
        }
    },
    finaliza: function (pontos, nome) {
        if (pontos >= 50) {
            //diz quem é o vencedor
            //chama a função zerar pontos
            this.zeraPontos();
            alert(`O player ${nome} ganhou`);
        }
    },
    zeraPontos: function () {
        player1.pontos = 0;
        player2.pontos = 0;
    }

}