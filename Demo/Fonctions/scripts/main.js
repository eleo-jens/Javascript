// let prenom = prompt(`Quel est votre prénom ?`);
// let genre = confirm(`Êtes-vous une femme ?`);
// if (genre == true){
//     alert(`Bonjour Madame ${prenom}`);
// }
// else {
//     alert(`Bonjour Monsieur ${prenom}`);
// }

const html_prenom = document.getElementById("prenom"); // je récupère l'élement qui est la balise input <input id="prenom"></label> l'object ne change pas, son contenu peu changer. Toute la ligne avec la balise
const html_genre_f = document.getElementById("genre_f");
const html_genre_m = document.getElementById("genre_m");
const html_genre_o = document.getElementById("genre_o");

//dans cette div enelve l'enfant qui s'appelle html_prenom
//html_prenom.parentElement.removeChild(html_prenom);

//creation d'une fonction pour qu'une action se passe lorsqu'on clique sur le bouton
// on crée un objet de type function
// pour activer une fonction de mon script dans l'html on doit utiliser l'attribut onclick

const save_info = function () {
    // recuperer la valeur de l'input
    if (!html_prenom.value) {
        throw new Error(`Manque d'information: Prénom`);
    }
    if (!html_genre_f.checked && !html_genre_m.checked && !html_genre_o.checked) {
        throw new Error(`Manque d'information: Genre`);
    }
    let prenom = html_prenom.value;
    let genre;
    if (html_genre_f.checked) genre = html_genre_f.value;
    else if (html_genre_m.checked) genre = html_genre_m.value;
    else genre = html_genre_o.value;
    alert(get_info(prenom, genre));
}

/**
 * 
 * @param {string} prenom Prénom de l'utilisateur
 * @param {string} genre Genre de l'utilisateur: "F" pour femme, "M" pour homme, le reste pour autre
 * @returns Bonjour "Madame" ou "Monsieur" suivi du prénom
 */
const get_info = function(prenom, genre)
{
    if(typeof(prenom) != 'string') throw new TypeError(`Prenom is not a string`);
    if(typeof(genre) != 'string') throw new TypeError(`Genre is not a string`);
    let message = "Bonjour ";
    switch (genre) {
        case "F":
            message += "Madame ";
            break;
        case "M":
            message += "Monsieur ";
            break;
    }
    return message + prenom;
}
