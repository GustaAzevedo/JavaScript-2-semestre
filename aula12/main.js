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