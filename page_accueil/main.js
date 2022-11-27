const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first')
const logo = document.querySelector('.logo');
const bulles = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener("load", () => {
    //création d'une timeline de GreenSock, la timeline est un container à animations
    const timeline = gsap.timeline({paused: true});

    // méthode pour animer plusieurs éléments à la suite des autres
    // on anime les spans, ca va durer 1 sec, on ouvre un objet pour les KK: part de top -50, d'opacity 0 et d'un ease in
    // de power 2. out (plus lent vers la fin et d'une puissance de 2) et entre chaque animation il va se passer 0.3 secondes (= stagger)
    // staggerFrom va s'animer selon les KK jusqu'au caractéristiques décrites/placées dans le CSS

    //staggerFrom pour animer plusieurs elements
    //from pour animer un element

    timeline
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    // l'animation des boutons va se lancer une seconde avant le début de la timeline, soit pendant que la première anime se lance
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(bulles, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');
    

    timeline.play();
})