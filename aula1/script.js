//tipos de variáveis

let nickName = 'GustaMene'; //string
console.log(`O valor dessa variável é ${nickName}`);

let age = 18.0; //number (float)
console.log(`O valor dessa variável é ${age}`);

let active = true; //boolean (true or false)
console.log(`O valor dessa variável é ${active}`);

let indefinido = undefined; //undefined
console.log(`O valor dessa variável é ${indefinido}`);

let nulo = null; //null
console.log(`O valor dessa variável é ${nulo}`);

console.log(`Meu apelido é ${nickName}, minha idade é ${age}.`)

/*
let usuário = prompt('qual é o seu nome?');
console.log(`O nome do usuário é ${usuário}`);
*/


/*
let year = 2020;

let yearGusta = year - 18;
let yearFernandinho = year - 20;
let yearMichelle = year - 35;

console.log(yearGusta);
console.log(yearFernandinho);
console.log(yearMichelle);
*/


//atividade do imc
/*
let nome = 'gu';
let altura = 1.78;
let peso = 55;

let imc = peso / (altura ** altura);
if (imc > 30) {
    console.log('você está gordinho em huehue');
}
else {
    console.log('ta tranquilo');
}
*/

//atividade do imc - com array
let gusta = {
    nome: 'gustavp',
    peso: 55,
    altura: 1.78,
}
console.log(`${gusta.nome} pesa ${gusta.peso}`);

let imc = gusta.peso / (gusta.altura ** gusta.altura);
if (imc > 30) {
    console.log(`ele está sobrepeso`);
}
else {
    console.log('ele está num peso tranquilo');
}
