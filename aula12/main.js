/*

let nasc = [1893, 1989, 2001, 2004, 1759, 1592];

let idade = [];
for (let i = 0; i < nasc.length; i++) {
    idade.push(2020 - nasc[i]);
}
console.log(idade);

let born = [1893, 1989, 2001, 2004, 1759, 1592];
let age = [];
age = nasc.map(function (ano) {
    return 2020 - ano;
})
console.log(age);

let arrow = born.map((e) => 2020 - e);
console.log(`${arrow} é uma arrow function`);


let idAge = born.map((arrow, id) => {
    let ano = new Date().getFullYear();
    const idade = ano - arrow;
    return `id: ${id}, ano: ${ano}, idade: ${arrow}`
})

console.log(idAge);
*/

/*
let buttons = {
    name1: "Carlito",
    name2: "Tevez",
    apertaBotao: function () {
        document.querySelector("#es6").addEventListener('click', () => {
            console.log(this.name1);
        })
    }
}

buttons.apertaBotao();



// Prototype

function Usuario(nome, tipo) {
    let nm = nome;
    let tp = tipo;
}

let carlos = new Usuario("Carlos", "ADM")

Usuario.prototype.saldaUsuario = function (tipo) {
    let tp = tipo
    if (tipo == "ADM") {
        console.log("Você é brabo");
    }
    else {
        console.log("Você não é brabo");
    }
}
*/

function anosAposentadoria(anoNasc) {
    const idade = new Date().getFullYear() - anoNasc;
    return {
        idade: idade,
        anoNascimento: anoNasc,
        anosAposenta: 65 - idade
    }
}

let { idade, anoNascimento, anosAposenta } = anosAposentadoria(2002);

console.log(idade, anoNascimento, anosAposenta);