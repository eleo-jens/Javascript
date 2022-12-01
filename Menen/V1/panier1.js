//Le js je m'occupe pas encore des images ...
//test
let fiches = document.getElementById("produit");
let fiches2 = document.getElementById("produit2");
let table = document.querySelector("table");
let tbody = document.createElement("tbody");

// let img1 = document.createElement("img");
// let img2 = document.createElement("img");
// let img3 = document.createElement("img");
// let tr = document.createElement("tr");
// tr.classList.add("article");
// let tdnom = document.createElement("td");
// let tdprix = document.createElement("td");
// let tdimg = document.createElement("td");
// let tdquant = document.createElement("td");
//<td><input type="number" value="1" min="0" max="99" class="qtyinput"></td>

// let input = document.createElement("input");
// input.setAttribute("type", "number");
// input.setAttribute("value", "1");
// input.setAttribute("min", "0");
// input.setAttribute("max", "99");
// input.classList.add("qtyinput");
// console.log(input);

// img1.src =
//   "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80";
// img2.src =
//   "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
// img3.src =
//   "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=741&q=80";
let article1 = {
  produit: "Bombers beige",
  prix: 79,
  url_img:
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
};
let article2 = {
  produit: "t-shirt",
  prix: 25,
  url_img:
    "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
};
let article3 = {
  produit: "Ensemble",
  prix: 150,
  url_img:
    "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=741&q=80",
};
let produits = [article1, article2, article3];

// let images = [img1, img2, img3];

for (let i = 0; i < produits.length; i++) {

     let input = document.createElement("input");
     input.setAttribute("type", "number");
     input.setAttribute("value", "1");
     input.setAttribute("min", "0");
     input.setAttribute("max", "99");
     input.classList.add("qtyinput");

  // un tr prendre le produit
  let tr = document.createElement("tr");
  tr.classList.add("article");
  // un tdnom
  let tdnom = document.createElement("td");
  // un tdprix
  let tdprix = document.createElement("td");
  // un tdquant
  // un tdimg
  let tdimg = document.createElement("td");
  let img = document.createElement("img");
  let tdquant = document.createElement("td");

  // tdnom innerText produits[i].produit
  tdnom.innerText = produits[i].produit;
  // tdprix innerText produits[i].
  tdprix.innerText = produits[i].prix;
  // remplir img produits[i].champ
  img.src = produits[i].url_img;
  tdimg.appendChild(img);
  //<td><input/></td>
  tdquant.appendChild(input);

  //tdimg.innerHTML = article1.img1;
  //tdimg.appendChild(images[i]);
  tr.appendChild(tdimg);
  tr.appendChild(tdquant);
  tr.appendChild(tdnom);
  tr.appendChild(tdprix);

  tbody.appendChild(tr);
  table.appendChild(tbody);

  //console.log(tdimg);
  //   tdnom.innerHTML = produits[i].input;
  //   tdquant.appendChild(input);
  //   tbody.appendChild(tr);
  // //table.appendChild(tbody);
  //   tdnom.innerHTML = produits[i].produit;
  //   tr.appendChild(tdnom);
  //   tbody.appendChild(tr);
  //   table.appendChild(tbody);
  //   console.log(tdnom);
  //   tdprix.innerHTML = produits[i].prix;
  //   tr.appendChild(tdprix);
  //   tbody.appendChild(tr);
  //   table.appendChild(tbody);
  //   console.log(tdprix);
  //   console.log(i);
}
