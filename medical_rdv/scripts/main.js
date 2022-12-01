window.onload = function () {

    let form = document.querySelector('form');

    // gestion de l'envoie du formulaire - désactivation du submit
    document.querySelector('button').addEventListener("click", (e) => {
        e.preventDefault;
        get_data();
    });

    // fonction qui récupère et valide les données du formulaire
    const get_data = function () {
        patient_brut = {
            'civilite': document.querySelector('select').value,
            'nom': document.querySelector('input[name="nom"]').value,
            'prenom': document.querySelector('input[name="prenom"]').value,
            'gsm': document.querySelector('input[type="tel"]').value,
            'email': document.querySelector('input[type="email"]').value,
            'date': '',
            'heure': ''
        };
        console.log(patient_brut);
        
        name_control(patient_brut.nom, document.querySelector('input[name="nom"]'));
        // name_control(patient_brut.prenom, document.querySelector('input[name="prenom"]'));
    }

    const name_control = function (name, input) {
        let regExpression = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if (name.length < 2 || (!regExpression.test(name))) {
            console.log('Entrez un nom valide!');
            console.log(input);
            input.focus();
            let p = document.createElement('p');
            p.innerText = "Veuillez insérer des données valides.";
            p.classList.add('alert');
            form.appendChild(p);
            let i = document.createElement('i');
            i.classList.add("fa-solid");
            i.classList.add("fa-triangle-exclamation");
            input.parentNode.append(i);
            // <i class="fa-solid fa-triangle-exclamation"></i>

        }
    };

};