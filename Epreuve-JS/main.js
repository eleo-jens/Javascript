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
        let family = get_data();
        show_data(family);
    });

    btn_retour.addEventListener("click", function () {
        inscription.hidden = false;
        result.hidden = true;
        if (document.querySelector("ul")){
            let ul = document.querySelector("ul");
            result.removeChild(ul);
        }
    });

    btn_ajouter.addEventListener("click", function () {
        // incrémentation: récupérer le parent et compter les enfants pour déterminer l'id du nouvel enfant
        let nb_enfants = field_enfants.children.length - 1;
        let id_nb = nb_enfants + 1;

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
        if (id_to_delete <= 1){
            field_enfants.removeChild(enfant_to_delete);
        }
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
                lastname: document.getElementById("p2_lastname").value,
                firstname: document.getElementById("p2_firstname").value,
                birthdate: document.getElementById("p2_birthdate").value,
                gender: document.querySelector("input[name='p2_gender']:checked").value
            },
            enfants: []
        };

        for(let i = 0; i < nb_enfants; i++){
            family.enfants[i] = {
                lastname: document.getElementById(`e${i+1}_lastname`).value,
                firstname: document.getElementById(`e${i+1}_firstname`).value,
                birthdate: document.getElementById(`e${i+1}_birthdate`).value
            }
        }
        return family;
    };

    const show_data = function (family) {
        document.querySelector("#result p").hidden = true;
        let nb_enfants = field_enfants.children.length - 1;
        const ul = document.createElement("ul");
        let li = document.createElement("li");
        li.innerText = `${family.p1.lastname} ${family.p1.firstname} (né en ${get_year(family.p1.birthdate)})`;
        li.classList.add(family.p1.gender);

        ul.appendChild(li);
        li = document.createElement("li");
        li.innerText = `${family.p2.lastname} ${family.p2.firstname} (né en ${get_year(family.p2.birthdate)})`;
        li.classList.add(family.p2.gender);
        ul.appendChild(li);
        
        if (nb_enfants > 0) {
            const ul_enfants = document.createElement("ul");
            for (let i = 0; i < nb_enfants; i++) {
                li = document.createElement("li");
                li.innerText = `${family.enfants[i].lastname} ${family.enfants[i].firstname} (né en ${get_year(family.enfants[i].birthdate)})`;
                ul_enfants.appendChild(li);
            }
            ul.appendChild(ul_enfants);
        }
        result.prepend(ul);
    };

    const get_year = function(birthdate) {
        let js_date = new Date(birthdate);
        let year = js_date.getFullYear();
        return year;
    }
};