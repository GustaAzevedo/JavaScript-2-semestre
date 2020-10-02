/*
let NBATimes = function (_nome, _pontos) {
    this.nome = _nome;
    this.pontos = _pontos;
}

NBATimes.prototype.contaPontos = function () {
    let soma = 0
    for (let i = 0; i < this.pontos.length; i++) {
        soma += this.pontos[i]
    }
    console.log(soma);
}

let lakers = new NBATimes('Lakers', [89, 103, 120, 100]);
let goldenState = new NBATimes('GoldenState', [97, 105, 110, 99]);
let cleveland = new NBATimes('Cleveland', [89, 108, 117, 90]);
console.log(lakers, goldenState, cleveland);
*/


/*
let anos = [1985, 2002, 2004, 1960];
function CalculaIdade(ano) {
    return 2020 - ano;
}

function eMaiorDeIdade(idade) {
    return idade >= 18;
}

function maxHeartRate(idade) {
    return Math.round(207 - idade * 0.7);
}

function CalculaArray(array, fun) {
    let retornaArray = [];
    for (let i = 0; i < array.length; i++) {
        retornaArray.push(
            fun(array[i])
        );
    }
    return retornaArray;
}

let idade = CalculaArray(anos, CalculaIdade);
let maioridade = CalculaArray(idade, eMaiorDeIdade);
let heartRate = CalculaArray(idade, maxHeartRate);
console.log(anos, idade, maioridade, heartRate)
*/

function perguntaEmUmaEntrevista(area) {
    switch (area) {
        case 'programador':
            return function (nome) {
                console.log(nome + 'qual a linguagem que você programa?');
            }
        case 'designer':
            return function (nome) {
                console.log('você pode me mostrar seu portifólio ' + nome + '?');
            }
        default:
            return function (nome) {
                console.log('bahh' + nome)
            }
    }
}

let perguntaParaOProgramador = perguntaEmUmaEntrevista('programador');
perguntaParaOProgramador('Gustavo');

let perguntaParaODesigner = perguntaEmUmaEntrevista('designer');
perguntaParaODesigner('Andressa');

perguntaEmUmaEntrevista('programador')('Julia');

function quantoTempoParaAposentar(sexo) {
    switch (sexo) {
        case 'masculino':
            return function (idade) {
                console.log(65 - idade);
            }
        case 'feminino':
            return function (idade) {
                console.log(62 - idade);
            }
    }
}

quantoTempoParaAposentar('masculino')(19)
quantoTempoParaAposentar('feminino')(19)