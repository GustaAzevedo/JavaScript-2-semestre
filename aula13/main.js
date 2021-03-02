

const boxes = document.querySelectorAll('.box');
//console.log(boxes);

let array = Array.prototype.slice.call(boxes);
//console.log(array);
console.log(array[0])
/*
array.forEach(function (e) {


    e.style.color = "#ffffff";
    e.style.fontWeight = 900;
});
*/

//javascript 5
/*
let arrayMelhor = Array.from(boxes);

function colore(e) {
    let ed = e;

    for (let i = 0; i < ed.length; i++) {
        if (ed[i].className === 'box red') {
            continue;
        }
        console.log(ed[i])
        ed[i].style.backgroundColor = "#fff222";

    }
}
colore(arrayMelhor);
colore(array);
*/

//arrayMelhor.forEach(e => {
//    e.style.color = "#fff"
//})

/*
let lakers = {
    pontos: 50,
}

lakers.prototype.calculaPontos = function () {
    return 1
}

let Orlando;

console.log(lakers.prototype.calculaPontos());
*/

let caixas = document.querySelectorAll('.box');

for (const c of Array.from(caixas)) {
    if (c.className.includes('blue')) {
        continue;
    }
    c.style.backgroundColor = 'blue';
    c.textContent = 'Novo Azul';
}

let foragidos = ['cleiton', 'Fernando', 'Adailton', 'Lucas', 'Geuseph'];

let quemEstaForagido = foragidos.map(function (e) {
    return e === 'Fernando' || e === 'Adailton';
})

console.log(quemEstaForagido.indexOf(true));

console.log(foragidos);
console.log(quemEstaForagido);