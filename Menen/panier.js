//Le js je m'occupe pas encore des images ...
//1.Je vais composer le titre des articles dans js pour gérer les prix et le total
let article1 = { produit: "Bombers beige", prix: 79 };
let article2 = { produit: "t-shirt", prix: 25 };
let article3 = { produit: "Ensemble", prix: 150 };
//Pour sortir un élément de l'article
console.log(article1.produit);
// sortir tout les élément de l'article
console.log(article2);
// pour ajouter le prix d'un article à un autre
console.log(article3.prix + article2.prix);
// je vais créer un tableau pour mes images
let images = {
  img1: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
  img2: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
  img3: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
};
//Je dois inserer les infos du produit dans l'html
function vignette() {
  let table = document.querySelector("table");

  let vignette = document.createElement("img");
  let conteneur = document.createElement("td");
  vignette.src =
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80";
  console.log(vignette);
  // conteneur.innerHTML = vignette;
  conteneur.appendChild(vignette);
}
// vignette();
//test
let fiches = document.getElementById("produit");
let table = document.querySelector("table");

let tbody = document.createElement("tbody");
let tr = document.createElement("tr");
let td = document.createElement("td");
td.innerHTML = article1.produit;
tr.appendChild(td);
tbody.appendChild(tr);
table.appendChild(tbody);
console.log(td);
// document.body.appendChild(tr);
// document.body.innerHTML(tr);
// tr.appendChild(td);
// td.innerHTML = article1[i];

// for (let i = 0; i < article1.length; index++) {
//     let tr = document.createElement("tr");
//     console.log(tr);
//     let td = document.createElement("td");
//     console.log(td);
//     body.appendChild(tr);
//     body.innerHTML(tr);
//     tr.appendChild(td);
//     td.innerHTML = article1[i];
// }

// function gerer() {
//     for (let i = 0; i < article1.length; index++) {
//         let tr = document.createElement("tr");
//         let td = document.createElement("td");
//         body.appendChild(tr);
//         body.innerHTML(tr);
//         tr.appendChild(td);
//         td.innerHTML = article1[i];
//     }
// }
// fiches.onclick = gerer;
