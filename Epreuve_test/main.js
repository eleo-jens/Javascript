window.onload = function () {
    const enonce = document.getElementById("enonce");
    const result = document.getElementById("result");
    const inscription = document.getElementById("inscription");
    const btn_ajouter = document.getElementById("ajout_enfant");
    const btn_supprimer = document.getElementById("supprimer_enfant");
    const btn_enregistrer = document.getElementById("enregistrer");
    const btn_retour = document.getElementById("retour");
    const field_enfants = document.getElementById("enfants");

    let nb_enfants;

    enonce.hidden = true;
    result.hidden = true;

    btn_enregistrer.addEventListener("click", function () {
        inscription.hidden = true;
        result.hidden = false;
        nb_enfants = field_enfants.children.length - 1
        let family = get_data(nb_enfants);
        show_data(family, nb_enfants);
    });

    btn_retour.addEventListener("click", function () {
        inscription.hidden = false;
        result.hidden = true;
        if (document.querySelector("ul")) {
            let ul = document.querySelector("ul");
            result.removeChild(ul);
        }
    });

    btn_ajouter.addEventListener("click", function () {
        // incrémentation: récupérer le parent et compter les enfants pour déterminer l'id du nouvel enfant
        nb_enfants = field_enfants.children.length - 1;
        let id_nb = nb_enfants + 1;

        // stocker les attributs des élements html pour automatiser leur création
        const attributes = [
            { name: `e${id_nb}_lastname`, text: "Nom : ", type: "text" },
            { name: `e${id_nb}_firstname`, text: "Prénom : ", type: "text" },
            { name: `e${id_nb}_birthdate`, text: "Date de naissance : ", type: "date" },
        ];

        let field_enfant = document.createElement("fieldset");
        field_enfant.setAttribute("id", `enfant_${id_nb}`);
        let legend = document.createElement("legend");
        legend.innerText = `Enfant ${id_nb}`;
        field_enfant.appendChild(legend);

        for (let i = 0; i < attributes.length; i++) {
            let div = create_label_input(attributes, i);
            field_enfant.appendChild(div);
        }
        field_enfants.appendChild(field_enfant);
    });

    btn_supprimer.addEventListener("click", function () {
        nb_enfants = field_enfants.children.length - 1;
        let enfant_to_delete = document.getElementById(`enfant_${nb_enfants}`);

        if (nb_enfants >= 1) {
            field_enfants.removeChild(enfant_to_delete);
        }
    });

    // création des 3 div contenants label et input pour les micro-formulaires
    const create_label_input = function (attributes, i) {
        let div = document.createElement("div");
        let label = document.createElement("label");
        label.setAttribute("for", attributes[i].name);
        label.innerText = attributes[i].text;
        let input = document.createElement("input");
        input.setAttribute("id", attributes[i].name);
        input.setAttribute("name", attributes[i].name);
        input.setAttribute("type", attributes[i].type);
        div.appendChild(label);
        div.appendChild(input);
        return div;
    };

    // fonction qui récupère les valeurs du formulaire et retourne un objet avec toutes les personnes de la famille
    const get_data = function (nb_enfants) {
        let family = {
            p1: {
                lastname: document.getElementById("p1_lastname").value,
                firstname: document.getElementById("p1_firstname").value,
                birthdate: document.getElementById("p1_birthdate").value,
                gender: document.querySelector("input[name='p1_gender']:checked").value
            },

            p2: {
                lastname: document.getElementById("p2_lastname").value,
                firstname: document.getElementById("p2_firstname").value,
                birthdate: document.getElementById("p2_birthdate").value,
                gender: document.querySelector("input[name='p2_gender']:checked").value
            },
            enfants: []
        };

        for (let i = 0; i < nb_enfants; i++) {
            family.enfants[i] = {
                lastname: document.getElementById(`e${i + 1}_lastname`).value,
                firstname: document.getElementById(`e${i + 1}_firstname`).value,
                birthdate: document.getElementById(`e${i + 1}_birthdate`).value
            }
        }
        return family;
    };

    // fonction affiche les résultats sous forme d'ul sur base de l'objet contenant les données de la famille
    const show_data = function (family, nb_enfants) {
        document.querySelector("#result p").hidden = true;
        const ul = document.createElement("ul");
        create_li(family.p1, ul);
        create_li(family.p2, ul);

        if (nb_enfants > 0) {
            const ul_enfants = document.createElement("ul");
            for (let i = 0; i < nb_enfants; i++) {
                create_li(family.enfants[i], ul_enfants)
            }
            ul.appendChild(ul_enfants);
        }
        result.prepend(ul);
    };

    // création li automatisée avec les données des personnes et insertion dans leur ul respective
    const create_li = function (person, ul) {
        let li = document.createElement("li");
        li.innerText = `${person.lastname} ${person.firstname} (né en ${get_year(person.birthdate)})`;
        if (person.gender) {
            li.classList.add(person.gender);
        }
        ul.appendChild(li);
    };

    // obtention de l'année de naissance sur base de la date de naissance complète sous format
    const get_year = function (birthdate) {
        let js_date = new Date(birthdate);
        let year = js_date.getFullYear();
        return year;
    }
};