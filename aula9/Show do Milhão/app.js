function Perguntas(pergunta, respostas, respostaCorreta){
    this.pergunta = pergunta;
    this.respostas = respostas;
    this.respostaCorreta = respostaCorreta;
}

Perguntas.prototype.fazAPergunta = function(){
    console.log(this.pergunta);
    for(let i = 0; i < this.respostas.length; i++){
        console.log(i + ': ' + this.respostas[i]);
    }
}

Perguntas.prototype.verificaResposta = function(resposta){
    if(resposta == this.respostaCorreta){
        console.log('Você está correto');
    }else{
        console.log('Você errrrrrrrrrroooooowwwww!!!');
    }
}

// -------------------------------------- //
let pergunta1 = new Perguntas('Qual é a fruta que ressecada para se tornar uma ameixa seca?', 
                              ['uva', 'ameixa', 'banana', 'abacaxi'], 1)
let pergunta2 = new Perguntas('Qual é o oceano que banhao litoral Brasileiro?', 
                              ['Pacifico','Indico','Ártico','Atlântico', 'Mar morto', 'Antartico'], 3)
let pergunta3 = new Perguntas('Quantas folhas tem o trevo da sorte?',
                              ['Quatro', 'Três', 'Cinco', 'Doze'], 0);

let perguntas = [pergunta1,pergunta2, pergunta3];
let pergunta_randon = Math.floor(Math.random() * perguntas.length);

perguntas[pergunta_randon].fazAPergunta();
let resposta = parseInt(prompt('Qual é a resposta correta?'));
perguntas[pergunta_randon].verificaResposta(resposta);