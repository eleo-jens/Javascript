const html_radio_dates = document.querySelectorAll("input[name=date]");
const btn = document.querySelector("input[type=button]");
const html_custom_choice = document.querySelector("#custom_choice");
const html_classic_choice = document.querySelectorAll('.classic_choice');
const html_date_custom = document.querySelector("#custom_choice>input[type=date]");
const html_radio_custom = document.querySelector("#custom_choice>input[type=radio]");


const countdownNights = function (jour, mois) {
    let now = new Date();
    targetDate = new Date(now.getFullYear(), mois - 1, jour, now.getHours() + 1);
    if(targetDate < now)
    {
        targetDate = new Date(now.getFullYear() + 1, mois - 1, jour, now.getHours() + 1);
    }
    let now_milli = now.getTime();
    let date_milli = targetDate.getTime();
    let diff_milli = date_milli - now_milli;
    return Math.floor(diff_milli / (1000*60*60*24));
}

const setChoice = function () {
    let choice;
    for (let date of html_radio_dates) {
        if (date.checked)
            choice = date.value;
    }
    return choice;
}

const validateChoice = function () {
    let choice = setChoice();
    let nbNuit = 0;
    switch (choice) {
        case "nouvel_an":
            nbNuit = countdownNights(1, 1);
            break;
        case "saint_valentin":
            nbNuit = countdownNights(14, 2);
            break;
        case "halloween":
            nbNuit = countdownNights(31, 10);
            break;
        case "saint_nicolas":
            nbNuit = countdownNights(6, 12);
            break;
        case "noel":
            nbNuit = countdownNights(25, 12);
            break;
        case "custom":
            let targetDate = new Date(html_date_custom.value);
            nbNuit = countdownNights(targetDate.getDate(), targetDate.getMonth()+1);
            break;
        default:
            break;
    }
    console.log(nbNuit);
    document.querySelector("#result").innerHTML = `Il reste ${nbNuit} dodo${(nbNuit>1)?'s':''}!`;
}

const activateCustomField = function() {
    html_date_custom.disabled = false; 
    html_radio_custom.checked = true;
}

const disableCustomField = function(){
    html_date_custom.disabled = true; 
}

btn.onclick = validateChoice;
html_custom_choice.onclick = activateCustomField;
for (const choice of html_classic_choice) {
    choice.onclick = disableCustomField;
}