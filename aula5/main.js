
let times = [
    {
        nome: 'Lakers',
        pontos: [89, 120, 103, 100],
        media: function () {
            let soma = 0;
            for (let i = 0; i < this.pontos.length; i++) {
                soma = soma + this.pontos[i];
            }
            return media = soma / this.pontos.length;
        }
    },
    {
        nome: 'golden',
        pontos: [97, 105, 110, 99],
        media: function () {
            let soma = 0;
            for (let i = 0; i < this.pontos.length; i++) {
                soma = soma + this.pontos[i];
            }
            return media = soma / this.pontos.length;
        }
    },
    {
        nome: 'Cleveland',
        pontos: [90, 117, 108, 89],
        media: function () {
            let soma = 0;
            for (let i = 0; i < this.pontos.length; i++) {
                soma = soma + this.pontos[i];

            }
            return media = soma / this.pontos.length;
        }
    },

]

let NBA = {
    time: [times[0], times[1], times[2]],
    vencedor: function () {
        let winner = this.time[0]; //armazena time Lakers
        for (let i = 0; i < this.time.length; i++) {
            if (this.time[i].media() > winner.media()) {
                winner = this.time[i]; //armazena o objeto (this.time[i])
            }
        }
        console.log(winner.nome, 'é o venceedor com ', winner.media(), 'pontos');
    }
}

NBA.vencedor();


console.log(`O time ${times[0].nome} teve uma média de ${times[0].media()} pontos`);
console.log(`O time ${times[1].nome} teve uma média de ${times[1].media()} pontos`);
console.log(`O time ${times[2].nome} teve uma média de ${times[2].media()} pontos`);
