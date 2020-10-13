function Perguntas(pergunta, resp, respCorreta) {
    this.perguntas = pergunta;
    this.respostas = resp;
    this.respostaCorreta = respCorreta;
}

Perguntas.prototype.FazApergunta = function () {
    console.log(this.perguntas);
    for (let i = 0; i < this.respostas.length; i++) {
        console.log(i + ":" + this.respostas[i]);
    }
}

Perguntas.prototype.VerificaResposta = function (resposta) {
    if (resposta == this.respostaCorreta) {
        console.log('Você está correto');
    }
    else {
        console.log('Você Errou');
    }
}

/*----------------------------------------*/

let pergunta1 = new Perguntas('Qual é a fruta que ressecada se trona uma ameixa seca?',
    ['uva', 'ameixa', 'banana', 'abacaxi'],
    1);

let pergunta2 = new Perguntas('Qual é o Oceano que banha o litoral brasileiro?',
    ['Paxífico', 'índico', 'Ártico', 'Atlãntico', 'Mar morto'],
    3)

let pergunta3 = new Perguntas('Quantas folhas tem o trevo de quatro folhas?',
    ['1', '2', '3', '4', '5'],
    3)

let perguntas = [pergunta1, pergunta2, pergunta3];
let pergunta_ramdom = Math.floor(Math.random() * perguntas.length);

perguntas[pergunta_ramdom].FazApergunta();
let resposta = parseInt(prompt('Qual é a resposta correta?'));
perguntas[pergunta_ramdom].VerificaResposta(resposta);

