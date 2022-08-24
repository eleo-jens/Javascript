//IF()...ELSE IF()...ELSE...
/*
// stocker dans des constantes ainsi si on veut changer ces données on doit juste le faire une fois dans le programme
const MIN = 0;
const MAX = 100;
let number_to_guess = Math.floor(Math.random()*(MAX-MIN))+MIN;

let input_user = parseInt(prompt(`Veuillez donner un nombre entre ${MIN} et ${MAX}: `))

if(isNaN(input_user)){
    alert("Ce n'est pas un nombre 🥲")
}
else if(input_user < MIN){
    alert(`${input_user} est en dessous de ${MIN}`)
}
else if(input_user > MAX){
    alert(`${input_user} est supérieur à ${MAX}`)
}
else if(input_user > number_to_guess){
    alert(`${input_user} est trop grand. Il fallait deviner ${number_to_guess}.`)
}
else if(input_user < number_to_guess){
    alert(`${input_user} est trop petit. Il fallait deviner ${number_to_guess}.`)
}
else{
    alert(`Wow ! Quels talents de divination ! 😉`)
}
*/

//SWITCH()... CASE... : ...

/*
let lang_user = prompt("Veuillez indiquer votre langue (FR)\nPlease set your language (EN)\nGelieve uw taal door te geven (NL)");

switch(lang_user){
    case 'FR':
        alert("Bonjour!");
        break;
    case 'EN':
        alert("Hello!");
        break;
    case 'NL':
        alert("Goeiedag!");
        break;

    default:
        alert("No hable espagnol");
        break;
}
*/

//TERNAIRE: (condition) : valeur_si_vraie : valeur_si_faux
// Ce n'est pas une structure conditionnelle, il s'ait d'une opération retournant une valeur

/*
let is_female = confirm("Etes vous une femme?");

let message = (is_female == true) ? "Bonjour Madame!" : "Bonjour Monsieur!";

alert(message);
*/

//OPERATEUR DE COMPARAISON



