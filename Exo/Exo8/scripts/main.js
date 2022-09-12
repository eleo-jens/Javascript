let html_list = document.querySelector("div#descriptif tbody");
let html_cart = document.querySelector("div#panier tbody");
let html_total = document.querySelector("#total");
html_total.value = 0;

let descriptif_nom = ["Chaise", "Table", "Meuble TV"];
let descriptif_prix = [25, 150, 250];

// A CORRIGER
const createTR = function(name, price){
    let html_tr = document.createElement('tr');
    let html_td_name = document.createElement('td');
    let html_td_price = document.createElement('td');

    html_td_name.innerText = name;
    html_tr.append(html_td_name);
    html_td_price.innerText = price
    html_tr.append(html_td_price);
    html_cart.append(html_tr);
}

const addPanier = function(name, price){
    let html_tr = createTR(name, price);
    // let html_tr = document.createElement('tr');
    // let html_td_name = document.createElement('td');
    // let html_td_price = document.createElement('td');

    // html_td_name.innerText = name;
    // html_tr.append(html_td_name);
    // html_td_price.innerText = price
    // html_tr.append(html_td_price);
    html_cart.append(html_tr);
    html_total.value = parseFloat(html_total.value) + price;
}

const addProductList = function(name, price){
    let html_tr = document.createElement('tr');
    let html_td_name = document.createElement('td');
    let html_td_price = document.createElement('td');

    html_td_name.innerText = name;
    html_td_price.innerText = price;
    let btn = document.createElement('input');
    btn.type = "button";
    btn.value = "Ajouter au panier";
    btn.onclick = function() {addPanier(name, price)};
    // html_td_btn.innerHTML = "<input type='button' value='Ajouter au panier' onclick='addPanier("+i+")'/>"
    
    html_tr.append(html_td_name);
    html_tr.append(html_td_price);
    html_tr.append(btn);
    html_list.append(html_tr);
}

for (let i = 0; i < descriptif_nom.length; i++) {
    const name = descriptif_nom[i];
    const price = descriptif_prix[i];
    addProductList(name, price);
}
