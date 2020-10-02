/*
let altura = prompt("qual a sua altura").replace(",", ".");
let peso = prompt("qual o seu peso").replace(",", ".");
*/



let altura = 1.75;
let peso = 85;

let imc = peso / (altura * altura);

console.log(imc)

if (imc <= 24.9) {
    console.log("Você está no IMC ideal!");
}
else if (imc <= 29.9) {
    console.log("Você está Gordinho");
}
else if (imc <= 34.9) {
    console.log("Você está um gordo de responsa");
}
else if (imc <= 39.9) {
    console.log("Você está Suuper gordo");
}
else {
    console.log("full gordola");
}

/*
let lakers = {
    jogos: 4,
    ponstos: [89, 120, 103, 100]
}
let warriors = {
    jogos: 4,
    ponstos: [97, 105, 110, 99]
}
let cleveland = {
    jogos: 4,
    ponstos: [90, 117, 108, 89]
}

//FUNÇÃO QUE CALCULA MÉDIA
function calculaMedia(times) {
    saldo = 0;
    for (cont = 0; cont < times.ponstos.length; cont++) {
        saldo = saldo + times.ponstos[cont];
    }
    media = saldo / cont;
    //RETRNA MEDIA
    return (media)
}
let mediaL = calculaMedia(lakers);
let mediaW = calculaMedia(warriors);
let mediaC = calculaMedia(cleveland);


if (mediaC > mediaW && mediaC > mediaL) {
    console.log(`Os Cleveland tem a maior média de pontos, sendo ela ${mediaC}`);
}
else if (mediaW > mediaC && mediaW > mediaL) {
    console.log(`Os Warriors tem a maior média de pontos, sendo ela ${mediaW}`)
}
else {
    console.log(`Os Lakers tem a maior média de pontos, sendo ela ${mediaL}`)
}
*/