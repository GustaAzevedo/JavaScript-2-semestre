
let idadeGu = 2002;
let idadeLu = 2004;
let idadeVó = 1972;

function calculaIdade(idadeNascimento) {
    return 2020 - idadeNascimento;
}


function anosParaAposentar(idadeNascimento, nome, sexo) {
    let idade = calculaIdade(idadeNascimento);

    let ateAposentar;
    switch (sexo) {
        case 'M':
        case 'Masculino':
            ateAposentar = 65;
            break;
        case 'F':
        case 'Feminino':
            ateAposentar = 60;
            break;
        default:
            console.log('VOCÊ DEVE INFORMAR O SEU SEXO (M, Masculino, F, Feminino)');
            return;
    }

    let aposentadoria = ateAposentar - idade;
    if (aposentadoria > 0) {
        console.log(`${nome} irá se aposentar em ${aposentadoria} anos`);
    }
    else {
        console.log(`${nome} se aposentou faz ${aposentadoria} anos`)
    }
}

anosParaAposentar(idadeGu, 'gustavo', 'M');



/*
//calcula Gorjeta
let gusta = parseInt(prompt("quanto voce gastou?"));
let pedrinho = 150;
let cleitin = 124;

function gorjeta(gasto, nome) {
    let dezPorcento = gasto * 0.1;
    let dezessei = gasto * 0.16;
    let dezoito = gasto * 0.18;
    document.write(`${nome}Você gastou ${gasto}, então a gorjeta será ${dezPorcento}, ${dezessei} e ${dezoito} reais <br>`);
}

var gorjetaGu = gorjeta(gusta, 'Gusta');
var gorjetaPE = gorjeta(pedrinho, 'Pedrin');
var gorjetaCle = gorjeta(cleitin, 'Cleitin');
*/

/*
let gorjeta = function (valorDaConta) {
    return [valorDaConta * 0.10, valorDaConta * 0.16, valorDaConta * 0.18];
}
*/