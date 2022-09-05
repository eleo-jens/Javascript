let operateur;
let number1;
let html_show = document.getElementById("show");
let html_calcul = document.getElementById("calcul");
html_calcul.value = "";
html_show.value = 0;
let decimal_pressed = false;
let first_number = true;
let message = "";

const get_number = function (number) {
    if (first_number){
        html_show.value = 0;
        first_number = false;
    }
    if (number == 0 && screen.value === "0") number = "";
    if (number != 0 && number != '.' && html_show.value === "0") html_show.value = "";
    html_show.value += number;
}

const get_operator = function (value) {
    if (number1 || number1 == 0) get_result();
    number1 = parseFloat(html_show.value);
    html_calcul.value = number1;
    console.log(`number1 : ${number1}`);
    operateur = value;
    html_calcul.value += operateur;
    console.log(`operator: ${operateur}`);
    decimal_pressed = false;
    html_show.value = number1;
    first_number = true;
}

const get_decimal = function () {
    if (get_decimal == false) {
        get_decimal = true;
        get_number('.');
    }
    else console.warn(`Decimal was already pressed`);
}

const get_result = function () {
    if (!number1 && number1 != 0) throw new Error(`Pas encore de valeur ...`);
    if (!operateur) throw new Error(`Pas encore d'opérateur ...`);
    let number2 = parseFloat(html_show.value);
    html_calcul.value += number2;
    console.log(`number2 : ${number2}`);
    switch (operateur) {
        case '+':
            html_show.value = number1 + number2;
            break;
        case '-':
            html_show.value = number1 - number2;
            break;
        case '*':
            html_show.value = number1 * number2;
            break;
        case '/':
            html_show.value = number1 / number2;
            break;
    }
    html_calcul.value += '=' + html_show.value;
    first_number = true;
    decimal_pressed = false;
}