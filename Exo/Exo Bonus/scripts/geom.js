const rect_surface = function (hauteur, largeur) {
    checkNumber(hauteur, 'Hauteur');
    checkNumber(largeur, 'Largeur');
    return hauteur * largeur;
}

const rect_perimeter = function (hauteur, largeur) {
    checkNumber(hauteur, 'Hauteur');
    checkNumber(largeur, 'Largeur');
    return (hauteur + largeur) * 2;
}

const tri_surface = function (hauteur, base) {
    checkNumber(hauteur, 'Hauteur');
    checkNumber(base, 'Base');
    return (base * hauteur) / 2;
}

const tri_perimeter = function (hauteur, base) {
    checkNumber(hauteur, 'Hauteur');
    checkNumber(base, 'Base');
    return Math.sqrt(base ** 2 + Math.pow(hauteur, 2)) + base + hauteur;
    // return Math.hypot(base, hauteur) + base + hauteur;
}

const carre_surface = function (cote) {
    checkNumber(cote, 'Côté');
    return cote * cote; //cote**2
}

const carre_perimeter = function (cote) {
    checkNumber(cote, 'Côté');
    return 4 * cote;
}

const cercle_surface = function (rayon) {
    checkNumber(rayon, 'Rayon');
    return Math.PI * (rayon * 2);
}

const cercle_perimeter = function (rayon) {
    checkNumber(rayon, 'Rayon');
    return 2 * Math.PI * rayon;
}

const checkNumber = function (nb, nameof = 'variable') {
    // si le type de nb n'est pas un number, je laisse une erreur
    if (typeof (nb) != 'number')
        throw new TypeError(`Bad type: ${nameof} (${typeof (nb)})`);
    // s'il n'est pas un Nan alors je lance une autre erreur: exemple un parseFloat qui bug (parseInt(titi)), parseInt(Null), ou une autre fonction qui a retourné un NaN
    if (isNaN(nb))
        throw new Error(`Bad value : ${nameof} (${nb})`);
}
