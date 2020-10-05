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

let players = function (_nome, _id) {
    this.nome = _nome;
    this.id = _id;
    this.pontos = 0;
    this.pontosTemporarios = 0;
}

let player1 = new players('Player 1', 1);
let player2 = new players('Player 2', 2);
console.log(player1, player2);

players.prototype.jogaDado = function () {
    dado.jogando();
    jogo.verificaValorDado();
}

players.prototype.parar = function () {
    this.adicionaNosPontos();
    jogo.proximoJogador();
    jogo.finaliza(this.pontos, this.nome);
}

players.prototype.adicionaNosPontos = function () {
    this.pontos += this.pontosTemporarios;
    this.imprimePontos();
}

players.prototype.adicionaNoPontoTemporario = function (pontos) {
    this.pontosTemporarios += pontos;
    this.imprimePontosTemporarios();
}

players.prototype.zeraPontoTemporario = function () {
    this.pontosTemporarios = 0;
    this.imprimePontosTemporarios();
}

players.prototype.imprimePontosTemporarios = function () {
    document.querySelector('#pontosTemporariosPlayer-' + this.id).textContent = this.pontosTemporarios;
    console.log(this.pontosTemporarios);
}


players.prototype.imprimePontos = function () {
    document.querySelector('#pontosPlayer-' + this.id).textContent = this.pontos;
}



let pig = function (jogadores) {
    this.jogadores = jogadores;
    this.jogadorAtual = 0;
}

pig.prototype.PlayerAtual = function () {
    return this.jogadores[this.jogadorAtual];
}

pig.prototype.proximoJogador = function () {
    this.PlayerAtual().zeraPontoTemporario();

    this.jogadorAtual++;
    if (this.jogadorAtual == this.jogadores.length) {
        this.jogadorAtual = 0;
    }
    document.querySelector('#jogadorAtual').textContent = this.PlayerAtual().nome;
}

pig.prototype.verificaValorDado = function () {
    if (dado.valor == 1) {
        this.proximoJogador();
    }
    else {
        this.PlayerAtual().adicionaNoPontoTemporario(dado.valor);
    }
}

pig.prototype.finaliza = function (pontos, nome) {
    if (pontos >= 50) {
        //diz quem é o vencedor
        //chama a função zerar pontos
        this.zeraPontos();
        alert(`O player ${nome} ganhou`);
    }
}

pig.prototype.zeraPontos = function () {
    player1.pontos = 0;
    player2.pontos = 0;
}

let jogo = new pig([player1, player2]);