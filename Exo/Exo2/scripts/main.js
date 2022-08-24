let product_name = prompt(`Veuillez indiquer le nom du produit: `);
if (product_name == null || product_name == ""){
    alert("Hey! Il faut un nom!");
}
else {
    let product_price = parseFloat(prompt(`Veuillez indiquer le prix unitaire de ${product_name}: `));
    // si on fait une multiplication pas besoin en soi de faire ParseInt ParseFloat des strings, mais c'est plus propre de la faire pour controler nos input
    if(isNaN(product_price)){
        alert("Hey ! Pas de prix, c'est pas gratuit!");
    }
    else {
        let product_quantity = parseInt(prompt(`Veuillez indiquer la quantité désirée de ${product_name}: `));
        if(isNaN(product_quantity)){
            alert("Hey ! Il manque la quantité: il faut un article au minimum !");
        }
        else {
            // const TVA = 21;
            // let somme_tva = somme_htva + (somme_htva * TVA / 100);
            let somme_htva = product_price * product_quantity; 
            let somme_tva = somme_htva * 1.21;
            alert(`Pour ${product_quantity} "${product_name}" veuillez payer la somme de: ${somme_tva}€ (${somme_htva}€ HTVA)`);
        }
    }
}

//AUTRE VERSION: object définit de façon littérale: on peut regrouper les infos dans un objet
// je crée un object qui n'a aucune propriété et je lui crée quand même un .name et il va l'ajouter car c'est un object de type prototypaire: à éviter
// let article = {};
// article.name = prompt(`Veuillez indiquer le nom du produit: `);
// article.price = ParseFloat(prompt(`Veuillez indiquer le prix unitaire de ${article.name}: `));

// let product_quantity = parseInt(prompt(`Veuillez indiquer la quantité désirée de ${article.name}: `));
// let somme_htva = article.price * product_quantity; 
// let somme_tva = somme_htva * 1.21;
// alert(`Pour ${product_quantity} "${article.name}" veuillez payer la somme de: ${somme_tva.toFixed(2)}€ (${somme_htva.toFixed(2)}€ HTVA)`);