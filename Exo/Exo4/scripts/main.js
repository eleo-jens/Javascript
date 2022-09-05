// ma version
let message = "";
const html_show = document.getElementById("show");
let decimal_pressed = false; 

const get_calcul = function(value){
    if(value == 0 && !html_show.value) value = "";
    if(value != 0 && value != '.' && !html_show.value) html_show.value = "";
    message += value;
    html_show.value = message;
}

const get_result = function(){
    html_show.value = message + '=' + eval(message);
}

const press_decimal = function(){
    if(decimal_pressed == false){
        get_calcul(".");
        decimal_pressed = true;
    }
    else console.warn(`Decimal was already pressed`);
}