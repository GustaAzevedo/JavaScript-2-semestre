const pessoas = [
    {
        nome: 'Gustavo',
        altura: 1.78,
        peso: 55,
    },
    {
        nome: 'Gabriel',
        altura: 1.80,
        peso: 85,
    },
    {
        nome: 'Cleitinho',
        altura: 1.50,
        peso: 95,
    },
    {
        nome: prompt('Digite seu nome'),
        altura: parseFloat(prompt('Digite a sua altura').replace(',', '.')),
        peso: parseInt(prompt('Digite o seu peso')),
    },

]


/*---------------------------------- Calcula o imc e retorna --------------------------------------*/
function calculaImc(pessoa, nome) {
    let imc = pessoa.peso / (pessoa.altura * pessoa.altura);
    console.log(imc, nome);

    return imc;
}

let imcGu = calculaImc(pessoas[0], pessoas[0].nome);
let imcGa = calculaImc(pessoas[1], pessoas[1].nome);
let imcCle = calculaImc(pessoas[2], pessoas[2].nome);
let imcX = calculaImc(pessoas[3], pessoas[3].nome);


/*-------------------------- Pega valor IMC e revela a categoria ------------------------------------*/
function defineImc(imc, nome) {

    if (imc <= 24.9) {
        console.log(`${nome}, você está no peso ideal`);
    }
    else if (imc <= 29.9) {
        console.log(`${nome}, você está um pouco gordinho`);
    }
    else if (imc <= 34.9) {
        console.log(`${nome}, você está gordo`);
    }
    else if (imc <= 39.9) {
        console.log(`${nome}, você está obeso`);
    }
    else {
        console.log(`${nome}, você está full gordola`);
    }
}

defineImc(imcGu, pessoas[0].nome);
defineImc(imcGa, pessoas[1].nome);
defineImc(imcCle, pessoas[2].nome);
defineImc(imcX, pessoas[3].nome);