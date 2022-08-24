let contrat = parseInt(prompt(`Veuillez indiquer votre type de contrat:\nmi-temps (1)\ntemps plein (2)\ninterim (3)`));

if (isNaN(contrat) || contrat < 1 || contrat > 3){
    alert(`Erreur: Vous n'avez pas taper: 1, 2 ou 3`);
}
else {
    let salaire = parseInt(prompt(`Veuillez indiquer le montant de votre salaire mensuel: `));
    if (isNaN(salaire) || salaire < 0)
    {
        alert(`Attention, le salaire n'est pas valide...`);
    }
    else {
        let total = salaire;
        const SEUIL = 1400;
        switch (contrat){
            case 1:
                const CHOMAGE_BASE = 500;
                const CHOMAGE_BONUS = 200;
                total += CHOMAGE_BASE;
                if (salaire < SEUIL){
                    total += CHOMAGE_BONUS;
                }
                break;
            case 3:
                // const PRIME_MIN = 200;
                // const PRIME_MAX = 400;
                if (salaire < SEUIL){
                    total += 400;
                }
                else {
                    total += 200;
                }
                break;
        }

        let cotisation; 
        if (total < 800){
            cotisation = total * 0.15;  
        }
        else if (total < 1200){
            cotisation = total * 0.25;  
        }
        else if (total < 1500){
            cotisation = total * 0.30;  
        }
        else{
            cotisation = total * 0.32;  
        }

        let contrat_type = "temps-plein";
        let bonus_message = "";
        switch  (contrat){
            case 1:
                contrat_type = "mi-temps";
                bonus_message = (salaire + CHOMAGE_BASE < total) ? ", avec bonus" : "";
                break;
            case 3:
                contrat_type = "interim";
                bonus_message = ", avec prime";
                break;
        }
        alert(`Pour un ${contrat_type} de ${salaire}€${bonus_message}. Total: ${total} - Cotisation: ${cotisation}€`);
                
        }
            
            //VERSION NON OPTIMISEE SI ON A PLUSIEURS CAS DEVIENT REDONDANT
            // switch(contrat){
                //     case 1:
                //         alert(`Pour un mi-temps de ${salaire}€ avec bonus. Total: ${total}€ - Cotisation: ${cotisation}€`);
                //         break;
                //     case 2:
                //         alert(`Pour un temps-plein de ${salaire}€. Total: ${total}€ - Cotisation: ${cotisation}€`);
                //         break;
                //     case 3:
                //         alert(`Pour un interim de ${salaire}€ avec prime. Total: ${total}€ - Cotisation: ${cotisation}€`);
                //         break;
                // }
    }