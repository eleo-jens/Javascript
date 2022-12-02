window.onload = function () {
    const enonce = document.getElementById("enonce");
    const result = document.getElementById("result");
    const inscription = document.getElementById("inscription");
    const btn_ajouter = document.getElementById("ajout_enfant");
    const btn_supprimer = document.getElementById("supprimer_enfant");
    const btn_enregistrer = document.getElementById("enregistrer");
    const btn_retour = document.getElementById("retour");
    const field_enfants = document.getElementById("enfants");

    enonce.hidden = true;
    result.hidden = true;

    btn_enregistrer.addEventListener("click", function () {
        inscription.hidden = true;
        result.hidden = false;
        get_data();
    });

    btn_retour.addEventListener("click", function () {
        inscription.hidden = false;
        result.hidden = true;
    });

    btn_ajouter.addEventListener("click", function () {
        // incrémentation: récupérer le parent et compter les enfants pour déterminer l'id du nouvel enfant
        let nb_enfants = field_enfants.children.length - 1;
        let id_nb = nb_enfants + 1;

        const attributes = [
            { name: `e${id_nb}_lastname`, text: "Nom : ", type: "text" },
            { name: `e${id_nb}_firstname`, text: "Prénom : ", type: "text" },
            { name: `e${id_nb}_birthname`, text: "Date de naissance : ", type: "date" },
        ];

        let field_enfant = document.createElement("fieldset");
        field_enfant.setAttribute("id", `enfant_${id_nb}`);

        let legend = document.createElement("legend");
        legend.innerText = `Enfant ${id_nb}`;
        field_enfant.appendChild(legend);

        for (let i = 0; i < attributes.length; i++) {
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
            field_enfant.appendChild(div)
        }
        field_enfants.appendChild(field_enfant);
    });

    btn_supprimer.addEventListener("click", function () {
        let id_to_delete = field_enfants.children.length - 1;
        let enfant_to_delete = document.getElementById(`enfant_${id_to_delete}`);
        field_enfants.removeChild(enfant_to_delete);
    });

    const get_data = function () {
        let nb_enfants = field_enfants.children.length - 1;
        let family = {
            p1: {
                lastname: document.getElementById("p1_lastname").value,
                firstname: document.getElementById("p1_firstname").value,
                birthdate: document.getElementById("p1_birthdate").value,
                gender: document.querySelector("input[name='p1_gender']:checked").value
            },

            p2: {
                lastname: document.getElementById("p1_lastname").value,
                firstname: document.getElementById("p1_firstname").value,
                birthdate: document.getElementById("p1_birthdate").value,
                gender: document.querySelector("input[name='p1_gender']:checked").value
            },
            enfants: []
        };
    };
};