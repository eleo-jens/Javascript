document.addEventListener('load',function (){
    const html_HH = document.querySelector('#HH');
    const html_MM = document.querySelector('#MM');
    const html_SS = document.querySelector('#SS');
    const html_play = document.querySelector('#play');
    const html_pause = document.querySelector('#pause');
    const html_reset = document.querySelector('#reset');
    const html_save = document.querySelector('#save');

    html_play.onclick = Play;
    html_pause.onclick = Pause;
    html_reset.onclick = Reset;
    html_save.onclick = Save;

    const Play = function () {
        // jouer sur SetTimeout delai de 60 secondes pour ensuite lancer les minutes et remettre à zero les secondes 
    }

    const Pause = function () {

    }

    const Reset = function () {

    }
    
    const Save = function () {

    }






});
