window.onload = function () {

    // gestion de l'envoie du formulaire - désactivation du submit
    document.querySelector('button').addEventListener("click", (e) => {
        e.preventDefault;
        get_data();
    });

    // fonction qui récupère et valide les données du formulaire
    const get_data = function () {
        patient = {
            'civilite': document.querySelector('select').value,
            'nom': document.querySelector('input[name="nom"]').value,
            'prenom': document.querySelector('input[name="prenom"]').value,
            'gsm': document.querySelector('input[type="tel"]').value,
            'email': document.querySelector('input[type="email"]').value,
            'date': '',
            'heure': ''
        };
        console.log(patient)
        
    }


};