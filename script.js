let numberOne = +prompt("Birinchi sonni kiriting");
let numberTwo = +prompt("Ikkinchi sonni kiriting");

let message = +prompt(`Amalni tanlang:
                        1) Qoshish
                        2) Ayirish
                        3) Bolish
                        4) Kopaytirish`);

let sum = document.createElement("h1");


if (message == 1) {
    sum.textContent = numberOne + numberTwo;
    document.body.append(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`);
}else if (message == 2) {
    sum.textContent = numberOne - numberTwo;
    document.body.append(`${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`);
}else if (message == 3) {
    sum.textContent = numberOne / numberTwo;
    document.body.append(`${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`);
}else if (message == 4) {
    sum.textContent = numberOne * numberTwo;
    document.body.append(`${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`);
}else {
    sum.textContent = "Noto'g'ri malumot kiritdingiz";
    document.body.append(sum);
}

//This code done by Kamronbek without using ChatGPT or other AI.