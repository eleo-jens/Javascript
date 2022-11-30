let firstname = prompt(`Bienvenu ! Quel est votre prénom ?`)
let lastname = prompt(`Quel est votre nom ?`)

let number1 = prompt(`Faisons une addition. Donnez-moi un premier nombre: `)
let number2 = prompt(`Donnez-moi un second nombre: `)

//result = +number1 + +number2;
//let result = Number(number1) + Number(number2);
let result = parseInt(number1) + parseInt(number2)
// la technique ${} ne fonctionne qu'avec des accents graves
alert(`Bonjour ${firstname} ${lastname}, le résultat de ${number1} + ${number2} est ${result}.`)
