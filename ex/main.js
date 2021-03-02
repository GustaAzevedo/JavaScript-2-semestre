function hero(bullets, dragons) {
    //Get Coding!
    let a = bullets;
    let b = dragons;
    let aAnswer = false;

    if (a >= b * 2) {
        aAnswer = true;
    }
    else {
        aAnswer = false;
    };
    return {
        a: bullets,
        b: dragons,
        aAnswer: aAnswer,
    }
}

let a1 = { a, b, aAnswer } = hero(6, 4);
let a2 = { a, b, aAnswer } = hero(10, 5);
let a3 = { a, b, aAnswer } = hero(7, 4);
let a4 = { a, b, aAnswer } = hero(4, 5);
let a5 = { a, b, aAnswer } = hero(100, 40);
let a6 = { a, b, aAnswer } = hero(1500, 751);
let a7 = { a, b, aAnswer } = hero(0, 1);

console.log(a1.aAnswer, a1);
console.log(a2.aAnswer, a2);
console.log(a3.aAnswer, a3);
console.log(a4.aAnswer, a4);
console.log(a5.aAnswer, a5);
console.log(a6.aAnswer, a6);
console.log(a7.aAnswer, a7);








